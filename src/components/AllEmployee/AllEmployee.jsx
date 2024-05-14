import React, { useEffect, useState } from 'react'
import './AllEmployee.css'
import axios from "axios";
import Card from '../Card/Card'

const AllEmployee = () => {
  const [fullList,setFullList] = useState([]);
  console.log(fullList)
  const fetchInfo = async ()=>{
    //const resp = await axios("https://e-registration-server.onrender.com/allemployee");
    const resp = await axios("https://e-registration-server.onrender.com/allemployee");
    setFullList(resp.data);
  }
  useEffect(()=>{
    fetchInfo();
  },[]);
  const remove = async (e)=>{
    
    const resp = await axios.post("https://e-registration-server.onrender.com/removeemployee",{
      id: e,
      name: e.name
    },{
      'Content-Type': 'application/json'
    })
    console.log(resp)
    alert("employee deleted");
    window.location.replace("/");
  }
  return (
    <div className='employe-list'>
      <div className="y-container">
        <div className="all-items">
          {fullList.map((item,i)=>{
            return <Card key={i} {...item} rmfunction={remove}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default AllEmployee
