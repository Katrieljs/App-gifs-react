import React from "react";
import {Helmet} from "react-helmet"
import {useGif} from "../hooks/useGif.js"
import TrendingSearches from "../componentes/trendingSearches"
import CarrouselOfGifs from "../componentes/carrouselOfGifs"
import CarrouselOfTrends from "../componentes/carrouselOfTrends"
import "../App.css"


export default function Home(){
	const {gifs}=useGif()
	

	const title="Home | Giff"

	return(
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<h3 className="c-title">Ultima busqueda</h3>
			<CarrouselOfGifs gifs={gifs}/>
			<h3 className="c-title">Populares</h3>
			<CarrouselOfTrends />
			<TrendingSearches />
		</>	
	)
}