import React, { useEffect, useState } from 'react'
import './AllEmployee.css'
import axios from "axios";
import Card from '../Card/Card'
import search_icon from '../../Assets/search.png';

const AllEmployee = () => {
  const [fullList,setFullList] = useState([]);
  const [searchdata,setsearchData] = useState("");
  const fetchInfo = async ()=>{
    //const resp = await axios("https://e-registration-server.onrender.com/allemployee");
    const resp = await axios("https://e-registration-server.onrender.com/allemployee");
    setFullList(resp.data);
  }
  const fetchSearchData = async ()=>{
    const resp = await axios.post("https://e-registration-server.onrender.com/searchemployee",{searchdata},{'Content-Type': 'application/json'});
    resp.data.length>0?setFullList(resp.data):alert("No employee matched");
  }
  useEffect(()=>{
    fetchInfo();
  },[]);
  
  const handleSearch = (e)=>{
    setsearchData(e.target.value);
  }
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
      <div className="search">
      <button onClick={fetchInfo}>Show all</button>
        <div className="search-container">
          <input value={searchdata} onChange={(e)=>handleSearch(e)} name='name' type='text'/>
          <img src={search_icon} alt='' onClick={()=>fetchSearchData()}/>
        </div>
      </div>
      <hr/>
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
