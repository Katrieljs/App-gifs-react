import React,{useCallback, useRef, useEffect} from "react";
import {Helmet} from "react-helmet"
import ListOfGifs from "../componentes/listOfGifs.js";
import {useGif} from "../hooks/useGif.js"
import useNearScreen from "../hooks/useNearScreen.js"
import debounce from "just-debounce-it"
import Loader from "../componentes/loader.js"

export default function SearchResults({params}){
	const {keyword, rating, languaje}=params;

	const {loading, gifs, setPage}=useGif({keyword, rating, languaje})
	const externalRef=useRef()
	const {isNearScreen}=useNearScreen({
		externalRef: loading ? null : externalRef,
		distance: "300px",
		once: false
	})

	const title=`Resultados de ${keyword}`

	const debounceHandleNextPage=useCallback(debounce(
		 ()=> setPage(prevPage=>prevPage + 1), 100
	), [])

	useEffect(()=>{
		if (isNearScreen) debounceHandleNextPage()
	},[debounceHandleNextPage, isNearScreen])

return <div className="search-results"> 
	{loading ? <Loader /> 
			: <> 
				<Helmet>
					<title>{title}</title>
				</Helmet>

				<h3 className="c-title">{decodeURI(keyword)}</h3> 
				<ListOfGifs gifs={gifs} /> 
				<div id="visor" ref={externalRef}></div>
			</>
	} 
	</div>
}

