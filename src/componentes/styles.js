import {Link as LinkWouter} from "wouter"
import styled from "@emotion/styled"

export const Link=styled(LinkWouter)`
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  
  :hover{
  	background-color: #9993ff
  }

  [disabled]{
  opacity: .3;
  pointer-events: none;
}
`
export const LinkNav=styled(LinkWouter)`
  color: #fff9;
  text-decoration: none;
  transition: all .3s;
  font-size: medium;

  :hover{
    color: #fff;
  }
`

export const Button=styled("button")`
border: 1px solid transparent;
background-color: ${props => props.bg || "#9933ff"};
color: ${props => props.color || "#fff"};
cursor: pointer;

:hover{
  background-color: ${props => props.hoverBg || "#9933ff"};
  color: ${props => props.hoverCl || ""};
}

[disabled]{
opacity: .3;
pointer-events: none;
}
`

export const Input=styled("input")`
  background-color: #fff;
  border: 1px solid transparent;
  outline: none;

  :hover{
    border: 1px solid #ccc;
  }
`

export const FormStyled=styled("form")`
  display flex;
  flex-direction: row;

  >*{
    font-size: 1rem;
    padding: 5px 15px;
  }
`

export const Select=styled("select")`
  appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
    display: inline-block;
    cursor: pointer;
    outline: 0; 
    color: #999;
    position: relative;
    top: .1px;
    transition: all 0.25s ease;
    border: 1px solid transparent;
    -moz-box-sizing: content-box;
    -webkit-box-sizing:content-box;
    box-sizing:content-box;
    height: 19px;

    :hover{
    border: 1px solid #ccc;
  }
`

export const HeaderStyled = styled("header")`
  background: rgb(18, 18, 18);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: .6em;
  top: -1px;
  position: sticky;
  z-index: 1000;

  >*{
    font-size: 1rem;
  }
`

export const FormRegister=styled("form")`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  color: #fff;
  width: 100%;

  label{
    display: flex;
    flex-direction: column;
    width: 300px;
    font-size: .9rem;
  }

  Input{
    padding: 10px;
    border: 1px solid #ccc;
    background-color: #111;
    color: #fff;
  }

  p{
    font-size: small;
    color: rgb(230, 17, 17);
  }

  Button{
    padding: 10px;
    width: fit-content;
  }
`

export const FormLogin=styled(FormRegister)`
  gap: 1.2rem;
`
