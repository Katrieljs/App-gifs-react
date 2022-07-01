import React from "react";
import {useLocation} from "wouter";
import useForm from "../hooks/useFilters.js"
import Button from "./button.js"
import { Input } from "./styles.js";
import {FormStyled as Form} from "./styles.js";
import {Select} from "./styles.js"

const RATINGS=["g","pg","pg-13","r"]

const LANGUAJES=["en", "es", "pt", "id", "fr"]

function SearchForm({initialKeyword="", initialRating=RATINGS[0], initialLanguaje=LANGUAJES[0]}) {
	const [path, pushLocation]=useLocation();

	const {keyword, rating, languaje, updateKeyword, updateRating, updateLanguaje}=useForm({
		initialKeyword,
		initialRating,
		initialLanguaje
	})

	const handleChange=(e)=>{ 
		updateKeyword(e.target.value)
	}

	const handleSubmit=(e)=>{
		e.preventDefault()
		pushLocation(`/search/${keyword}/${rating}/${languaje}`)
	}

	const handleChangeRating=(e)=>{
		updateRating(e.target.value)
	}

	const handleChangeLanguaje=(e)=>{
		updateLanguaje(e.target.value)
	}

	return(
		<Form onSubmit={handleSubmit}>
				<Input placeholder="Buscar gifs" onChange={handleChange} type="text" value={keyword}/>
				<Select onChange={handleChangeRating} value={rating}>
					{
						RATINGS.map(rating=> <option key={rating}>{rating}</option>)
					}
				</Select>
				<Select onChange={handleChangeLanguaje} value={languaje}>
					{
						LANGUAJES.map(languaje=> <option key={languaje}>{languaje}</option>)
					}
				</Select>
				<Button>Search</Button>
		</Form>
	)
}

export default React.memo(SearchForm)