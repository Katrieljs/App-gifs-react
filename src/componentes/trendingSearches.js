import React,{Suspense} from "react" 
import useNearScreen from "../hooks/useNearScreen.js"
import Loader from "./loader.js"

const TrendingSearches=React.lazy(()=> import("./listOfTrendingSearches.js"))

export default function LazyTrending (){
	const {isNearScreen, fromRef}=useNearScreen()

	return <div ref={fromRef}>
		<Suspense fallback={<Loader />}>
		{isNearScreen? <TrendingSearches />: <Loader />}
		</Suspense>
	</div>
}