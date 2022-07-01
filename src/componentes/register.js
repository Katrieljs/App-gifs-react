import React,{useState} from "react"
import registerService from "../services/register.js"
import {useForm} from "react-hook-form"
import { FormRegister, Input, Button} from "./styles.js"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const gifsRegister="Ltz1ZA728qKw4mEY94"

export default function Register() {
	const gifRegister=()=>`https://media.giphy.com/media/${gifsRegister}/giphy.gif`
	const [registered, setRegistered]=useState(false)
	const [isSubmitting, setIsSubmitting]=useState(false)
	const {handleSubmit, register, formState: { errors }}=useForm()

	const onSubmit=values=>{
		setIsSubmitting(true)
		registerService(values)
			.then(()=>{
				setIsSubmitting(false)
				setRegistered(true)
			})
	}


	return (<div className="form-register_container">
			<div className="form-img_container">
				<img className="img-1"src={gifRegister()} alt="Register-gif"></img>
				<img className="img-2" src={gifRegister()} alt="Register-gif"></img>
				<img className="img-3" src={gifRegister()} alt="Register-gif"></img>
			</div>
			{registered ? <div className="message-register">
				<FontAwesomeIcon icon={faCheck} size="xl" />
				<span>¡Te has registrado!</span>
			</div>
			
				:<FormRegister onSubmit={handleSubmit(onSubmit)}>
				<h1>Sign up</h1>
				<label>
					Name
					<Input type="text" name="username" {...register("username", {required: "Este campo es requerido"}) } />
					<p>{errors.username?.message}</p>
				</label>
				<label>
					Password
					<Input type="password" name="password" {...register("password", {required: "Este campo es requerido"}) } />
					<p>{errors.password?.message}</p>
				</label>
				<Button disabled={isSubmitting}>Sign up</Button>
			</FormRegister>}
		</div>)
}