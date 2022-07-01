import {useContext, useEffect, useState} from "react"; 
import getGifs from '../services/peticion.js';
import GifsContext from "../context/gifsContext.js"

const INITIAL_PAGE=0;

export function useGif({keyword, rating, languaje}={keyword: ""}) {

	const {gifs, setGifs}=useContext(GifsContext);
	const [loadingNextPage, setLoadingNextPage]=useState(false)
	const [page, setPage]=useState(INITIAL_PAGE)
	const [loading, setLoading]=useState([])

	const keywordToUse= keyword || localStorage.getItem("lastKeyword");

  	useEffect(()=>{
  		setLoading(true)
    	getGifs({ keyword: keywordToUse, rating: rating, languaje: languaje })
    		.then(gifs=>{
    			setGifs(gifs)
    			setLoading(false)
    			localStorage.setItem("lastKeyword", keyword)
    		})
 	}, [keyword, keywordToUse, setGifs, rating, languaje])
 	//si no tiene dependencias osea el array vacio solo se ejecuta la primera vez que se renderiza el componente como en componentDidMount
 	//La dependencia es keyword porque al cambiar de keyword el componente se vuelve a renderizar si no la tuviera solo se renderizara una vez, por eso hay que poner la keyword como dependencia

 	useEffect(()=>{
 		if (page===INITIAL_PAGE) return 

 		setLoadingNextPage(true)

 		getGifs({keyword: keywordToUse, page, rating: rating, languaje: languaje})
 		.then(nextGifs=>{
 			setGifs(prevGifs=> prevGifs.concat(nextGifs))
 			setLoadingNextPage(false)
 		})
 	},[keywordToUse, page, setGifs, rating, languaje])

 	return {loading, loadingNextPage, gifs, setPage, rating, languaje}
}