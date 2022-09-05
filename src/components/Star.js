import React from 'react'
import { BsStar, BsStarFill } from "react-icons/bs";
import '../style.css';

const Star = (props) => {
  return (
    <div>
      <h2>{`${props.data.firstName} ${props.data.lastName}`} {props.data.isFavorite ? <BsStar className='icon' size={23} onClick={props.handleClick} /> : <BsStarFill className='icon' size={23} onClick={props.handleClick} />} </h2>
    </div>
  )
}

export default Star