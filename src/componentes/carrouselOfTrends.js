import { useState, useEffect} from "react"; 
import Gif from "./gif.js"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useDeviceDetect from "../hooks/useDevice.js"
import getTrendingGifs from "../services/getTrendingGifs.js";

export default function CarrouselOfTrends(){
 	// A react no le encanta que devuelvas una array, la solución es envolver todo en un div o en un fragment
  const {isMobile}=useDeviceDetect()
  const [gifsPopular, setGifsPopular]=useState([])

  const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      useEffect(function () {
        getTrendingGifs().then(setGifsPopular)
      },[])

	return <>
    <Carousel 
        swipeable={true}
        responsive={responsive}
        draggable={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={1000}
        array={true}
        centerMode={!isMobile}
        className="carousel" >
		{gifsPopular.map(({id, title, url})=>{
			       return <Gif
			              key={id} 
			              title={title}
			              id={id}
			              url={url}
			        />
			    })}
    </Carousel>
	</>
}