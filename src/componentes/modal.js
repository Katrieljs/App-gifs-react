import React from "react"
import ReactDom from "react-dom"
import {Button} from "./styles.js"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Modal({children, onClose}) {
	return(
		<div className="modal">
			<div className="modal-content">
				<Button bg="transparent" hoverBg="transparent" hoverCl="#fff" color="#fff9" onClick={onClose}>
					<FontAwesomeIcon icon={faXmark} size="lg" />
				</Button>
				{children}
			</div>
		</div>
	)
}

export default function ModalPortal({children, onClose}) {
	return ReactDom.createPortal(
		<Modal onClose={onClose}>
			{children}
		</Modal>, 
		document.getElementById("modal-root")
		)
}