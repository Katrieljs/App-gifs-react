import {API_KEY, API_URL} from "./settings.js"

export default function getGifs({keyword="perros", limit=15, rating="g", page=0, languaje="es"}={}){
	const apiURL=`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${languaje}`;
	
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