import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom'
import adduser from '../../Assets/adduser.png'
import alluser from '../../Assets/alluser.png'

const SideBar = ({changeSelected}) => {
    
  return (
    <div className='sidebar'>
        <Link to='/add'>
            <div className='sidebar-item' onClick={()=>changeSelected('adding')}>
                <img src={adduser} alt=''/>
            </div>
        </Link>
        <Link to='/all'>
            <div className='sidebar-item' onClick={()=>changeSelected('showing')}>
                <img src={alluser} alt=''/>
            </div>
        </Link>
    </div>
  )
}

export default SideBar