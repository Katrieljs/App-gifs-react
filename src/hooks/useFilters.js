import {useReducer} from "react";

const ACTIONS={
	UPDATE_KEYWORD: "update_keyword",
	UPDATE_RATING: "update_rating",
	UPDATE_LANGUAJE: "update_languaje"
}


const reducer=(state, action)=>{

	switch(action.type){
		case ACTIONS.UPDATE_KEYWORD:
			return {
				...state,
				keyword: action.payload
			}
		case ACTIONS.UPDATE_RATING:
			return {
				...state,
				rating: action.payload
			}
		case ACTIONS.UPDATE_LANGUAJE:
			return {
				...state,
				languaje: action.payload
			}
		default:
			return state
	}
	
}


export default function useForm({initialKeyword, initialRating, initialLanguaje}){
	const [state, dispatch]=useReducer(reducer, {
		keyword: decodeURIComponent(initialKeyword),
		rating: initialRating,
		languaje: initialLanguaje
	})

	const {keyword, rating, languaje}=state

	return{
		updateKeyword: keyword=> dispatch({type: ACTIONS.UPDATE_KEYWORD, payload: keyword}),
		updateRating: rating=> dispatch({type: ACTIONS.UPDATE_RATING, payload: rating}),
		updateLanguaje: languaje=> dispatch({type: ACTIONS.UPDATE_LANGUAJE, payload: languaje}),
		keyword,
		rating,
		languaje
	}
}