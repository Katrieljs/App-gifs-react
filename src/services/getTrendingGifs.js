import {API_KEY, API_URL} from "./settings.js"

export default function getTrendingGifs(){
	const apiURL=`${API_URL}/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`;
	
    return fetch(apiURL)
      .then(res=>res.json())
      .then(response=>{
        const {data}=response;
        const gifs=data.map(image=>{
          const {images, title, id}=image;
          const {url}=images.fixed_height;
          return {title, id, url}
        })
        return gifs
      })
}