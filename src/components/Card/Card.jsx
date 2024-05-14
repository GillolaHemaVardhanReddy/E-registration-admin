import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.profile_picture} alt="" />
      <div className='description'>
        <p>{props.name}</p>
        <div className="card-mini">
          <div className="new-card-mini">Gender: {props.gender}</div>
          <div className="new-card-mini">Role: {props.role}</div>
        </div>
        <p>{props.opinion}</p>
        <div className='rm-container' onClick={()=>props.rmfunction(props.id)}><button className='remove'>Remove</button></div>
      </div>
    </div>
  )
}

export default Card
