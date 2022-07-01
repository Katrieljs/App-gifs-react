import {useState, useEffect} from "react"
import {useGif} from "./useGif.js"
import getSingleGif from "../services/getSingleGif.js"

export default function useSingleGif({id}) {
	const {gifs}=useGif()
	const gifFromCache=gifs.find(singleGif=> singleGif.id===id)	

	const [gif, setGif]=useState(gifFromCache)
	const [isloading, setIsLoading]=useState(false)
	const [isError, setIsError]=useState(false)

	useEffect(()=>{
		if (!gif) {
			setIsLoading(true)

			getSingleGif({id})
				.then(gif=>{
					setGif(gif)
					setIsLoading(false)
					setIsError(false)
				}).catch(err=>{
					setIsLoading(false)
					setIsError(true)
				})
		}
	},[gif, id])

	return {gif, isloading, isError}
}
