import React,{useState} from 'react'
import './AddUser.css'
import upload_area from "../../Assets/upload_area.svg"
import axios from 'axios';
import {CirclesWithBar} from 'react-loader-spinner'

const AddUser = () => {
  const [image,setImage] = useState(false);
  const [load,setLoad] = useState(false);
  const imageHandler = (e)=>{
    setImage(e.target.files[0]);
  }
  const [employeeDetails,setEmployeeDetails] = useState({
    name:"",
    image:"",
    role: "",
    email: "",
    opinion: "",
    gender:"Male"
  });

  const uploadFile = async ()=>{
    const data = new FormData();
    data.append("file",image);
    data.append("upload_preset",'employee'); 
    try{
      const res = await axios.post(`https://api.cloudinary.com/v1_1/duecnxyxd/image/upload`,data);
      return res.data.secure_url
    }catch(error){
      console.log(error);
    }
  }

  const handleChange = (e)=>{
    setEmployeeDetails((prev)=>{
      return {...prev,[e.target.name]:e.target.value}
    })
    console.log(e.target.value);
  }
  const adduser = async ()=>{
    setLoad(true);
    console.log(employeeDetails);

    const imgUrl = await uploadFile();

    let employee = employeeDetails;
    employee.image = imgUrl;
    const resp = await axios.post("https://e-registration-server.onrender.com/addemployee",employee,{
      Accept: 'application/json',
      'content-type': 'application/json'
    });
    setLoad(false);
    if(resp.data.failed){
      alert(resp.data.error);
    }
    if(resp.data.success){
      alert("employee Added");
    }
    else{
      alert("Check Details once again");
    }
  }
  return (
    <div className='add-user'>
      <h1>Enter Employee details Below</h1>
      <div className='form-item'>
        <p>userName: </p>
        <input value={employeeDetails.name} name='name' onChange={handleChange} type='text' placeholder='Type here'/>
      </div>
      <div className='form-item'>
        <p>gender</p>
        <select name='gender' value={employeeDetails.gender} onChange={handleChange} className='form-item-selector'>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="others">others</option>
        </select>
      </div>
      <div className='form-item'>
        <p>Role: </p>
        <input value={employeeDetails.role} name='role' onChange={handleChange} type='text' placeholder='Type here'/>
      </div>
      <div className='form-item'>
        <p>Email: </p>
        <input value={employeeDetails.email} name='email' onChange={handleChange} type='text' placeholder='Type here'/>
      </div>
      <div className='form-item'>
        <p>Opinion/Experience about Company: </p>
        <input value={employeeDetails.opinion} name='opinion' onChange={handleChange} type='text' placeholder='Type here'/>
      </div>
      <div className='form-item'>
        <p>Upload your image: </p>
        <label htmlFor='file-input'>
          <img src={image? URL.createObjectURL(image):upload_area} className='addproduct-tumbnail-img' alt='' />
        </label>
        <input accept='image/*' onChange={imageHandler} type='file' name='image' id='file-input' hidden/>
      </div>
      <button onClick={()=>adduser()} className='add-btn'>Add</button>
      {
        load && <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        outerCircleColor="#4fa94d"
        innerCircleColor="#4fa94d"
        barColor="#4fa94d"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
      }
    </div>
  )
}

export default AddUser
