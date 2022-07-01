import React, {useState} from "react"
import {Button} from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const ButtonUp = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <Button className="btn-up"  onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
       <FontAwesomeIcon icon={faChevronUp} />
      </Button>
    );
  }
    
  export default ButtonUp;