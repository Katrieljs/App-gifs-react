import {useState, useContext ,useCallback} from "react"
import Context from "../context/userContext.js"
import loginService from "../services/login.js"
import favService from "../services/addFavService.js"

export default function useUser() {
	const {favs, setFavs, jwt, setJWT}=useContext(Context)
	const [state, setState]=useState({
		loading:false,
		error:false
	})

	const login=useCallback(({username, password})=>{
		setState({loading: true, error:false})
		loginService({username, password})
			.then((jwt)=>{
				window.localStorage.setItem("jwt", jwt)
				setState({loading: false, error:false})
				setJWT(jwt)
			})
			.catch(err=> {
				window.localStorage.removeItem("jwt")
				setState({loading: false, error:true})
				console.error(err)
			})
	},[setJWT])

	const addFav=useCallback(({id})=>{
		favService({id, jwt})
			.then(favs=>setFavs(favs))
			.catch(err=>{
				console.log(err)
			})
	},[setFavs, jwt])

	const logout=useCallback(()=>{
		window.localStorage.removeItem("jwt")
		setJWT(null)
	},[setJWT])

	return{
		addFav,
		favs,
		isLogged: Boolean(jwt),
		isLoginLoading: state.loading,
		hasLoginError: state.error,
		login,
		logout
	}
}