import React,{useState, useEffect} from "react"
import {useLocation} from "wouter"
import useUser from "../hooks/useUser.js"
import {FormLogin, Input, Button} from "./styles.js"

export default function Login({onLogin}) {
	const [username, setUserName]=useState("")
	const [password, setPassword]=useState("")
	const [, pushLocation]=useLocation()
	const {isLoginLoading, hasLoginError, login, isLogged}=useUser()

	useEffect(()=>{
		if(isLogged) {
			pushLocation("/")
			onLogin && onLogin()
		}
	},[isLogged, pushLocation, onLogin])

	const handleSubmit=(e)=>{
		e.preventDefault()
		login({username, password})			
	}

	return(
		<>
		{isLoginLoading && <span className="span-form">Checking credentials...</span>}
	      {!isLoginLoading &&
	        <FormLogin onSubmit={handleSubmit}>
			<h1>Log in</h1>
	          <label>
	            Username
	            <Input
	            onChange={(e) => setUserName(e.target.value)}
	            value={username}
	          />
	          </label>

	          <label>
	            Password
	            <Input
	              type="password"
	              onChange={(e) => setPassword(e.target.value)}
	              value={password}
	            />
	          </label>

	          <Button>Log in</Button>
	        </FormLogin>
	      }
	      {
	        hasLoginError && <span className="span-form">Credentials are invalid!</span>
	      }
		</>
	)
}