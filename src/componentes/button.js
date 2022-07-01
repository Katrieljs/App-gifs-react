import React from "react"
import {Button, Link} from "./styles.js"

export default function ButtonStyled({children, href}) {
	return href
		?<Link to={href}>{children}</Link>
		:<Button>{children}</Button>
}