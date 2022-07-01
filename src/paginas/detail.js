import React,{useContext} from "react";
import {Redirect} from "wouter"
import GifsContext from "../context/gifsContext.js"
import Gif from "../componentes/gif.js"
import useSingleGif from "../hooks/useSingleGif.js"
import {Helmet} from "react-helmet"
import Loader from "../componentes/loader.js"

export default function Detail({params}){
	const {gif, isloading, isError}=useSingleGif({id: params.id})
	const {gifs}=useContext(GifsContext)

	const title=gif?gif.title : ""
	const description=gif?`Detalle de: ${gif.title}`: ""
	
	

	if (isloading) {
	return (
		<>
		<Helmet>
			<title>Cargando...</title>
		</Helmet>
		<Loader />
		</>
		) 
	}

	if (isError) return <Redirect to='/404' />

	if(!gif) return null

	return (
		<div className="detail-c">
		<Helmet>
			<title>{title} | Giff</title>
			<meta name="description" content={description} />
		</Helmet>
			<Gif url={gif.url} id={gif.id} description={false} size="400px"/>
			<div>
				<h3>{title}</h3>
				<span>Id: </span><span>{gif.id}</span> 
			</div>
		</div>
	)
}