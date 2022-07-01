import React from "react"
import {Link} from "wouter"
import Fav from "./fav.js"

function Gif ({title, id, url, description, size}) {

	const styles={
		container:{
			width: size,
			height: size
		}
	}

	return(
		<div className="gif-c" style={styles.container}>
		<Fav className="fav" id={id} />
		<Link to={`/gif/${id}`} className="gif">
            <img className="gif-img" src={url} alt={title} style={styles.container}/>
			{
				description===false? null
						: <h4 className="gif-title">{title}</h4>
			} 
        </Link>
        </div>
	)
}

export default React.memo(Gif)

