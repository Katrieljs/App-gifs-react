import React,{useState, useEffect} from "react"
import getFavs from "../services/getFavs.js"

const Context=React.createContext({})

export function UserContextProvider({children}){
	const [favs, setFavs]=useState([])
	const [jwt, setJWT]=useState(
		()=>window.localStorage.getItem("jwt")
	)

	useEffect(()=>{
		if(!jwt) return setFavs([])
			getFavs({jwt}).then(setFavs)

	},[jwt])

	return <Context.Provider value={{favs, setFavs, jwt, setJWT}}>
		{children}
	</Context.Provider>
}

export default Context