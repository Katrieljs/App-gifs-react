import React from "react"
import {useRoute} from "wouter"
import useUser from "../hooks/useUser.js"
import {HeaderStyled} from "./styles.js"
import { LinkNav as Link } from "./styles.js"
import SearchForm from "./searchForm.js"

export default function Header() {

	const {isLogged, logout}=useUser()
	const [match]=useRoute("/login") 

	const handleClick=(e)=>{
		e.preventDefault()
		logout()
	}

	const content=match
		? null :
			isLogged?
				<Link to="#" onClick={handleClick}>
					Logout
				</Link>
				:<>
				<Link to="/login">
					Log in
				</Link>
				<Link to="/register">
					Sign up
				</Link>
				</> 

	return(
		<HeaderStyled>
			<Link to="/">Home</Link>
			<SearchForm />
			{content}
		</HeaderStyled>
	)
}


