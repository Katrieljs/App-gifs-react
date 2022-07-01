import React, {useState} from "react"
import useUser from "../hooks/useUser.js"
import Modal from "./modal.js"
import Login from "./login.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Fav({id}) {
	const {addFav, isLogged, favs}=useUser()
	const [showModal, setShowModal]=useState(false)

	let isFaved=favs.some(favId=>favId===id)

	const handleClick=()=>{
		if (!isLogged) return setShowModal(true)
		addFav({id})
	}

	const handleClose=()=>{
		setShowModal(false)
	}

	const handleLogin=()=>{
		setShowModal(false)
	}

	const [label,emoji]=isFaved
		?[
			"Remove gif from favorites",
			<FontAwesomeIcon icon={faHeart} color="#9933ff" size="xl"/>
		]:[
			"Add gif to favorites",
			<FontAwesomeIcon icon={faHeart} color="#fff" size="xl"/>
		]

	return(
		<>
		<button onClick={handleClick} className="button-fav">
			{emoji}
		</button>
			{showModal && <Modal onClose={handleClose}><Login onLogin={handleLogin}/></Modal>}
		</>
	)
}