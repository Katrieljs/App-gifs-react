import {API_KEY, API_URL} from "./settings.js"

const fromApiResponse=apiResponse=>{
	const {data}=apiResponse
	const {images, title, id}=data;
    const {url}=images.fixed_height;
    return {title, id, url}
}

export default function getSingleGif({id}) {
	return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
		.then(res=> res.json())
			.then(fromApiResponse)
}