const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'

export default function getFavs({jwt}) {
	return fetch(`${ENDPOINT}/favs`,{
		method: "GET",
		headers:{
			"Authorization": jwt,
			"Content-Type": "aplication/json"
		}
	}).then(res=>{
		if (!res.ok) throw new Error("Response fail")
		return res.json()
	}).then(res=>{
		const {favs}=res
		return favs
	})
}