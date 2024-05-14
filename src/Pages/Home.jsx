import React,{useState} from 'react'
import SideBar from '../components/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import './Home.css'
const Home = () => {
  const [selected,changeSelected] = useState(undefined);
  return (
    <>
      <div className="home">
        <div className="home-left">
          <SideBar changeSelected={changeSelected}/>
        </div>
        <div className="home-right">
          <div className={!selected? "none-selected" : "flip"}>
            <p>Welcome to our Page</p>
          </div>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Home
