import React,{useState,useEffect} from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom'

import { getPhoneById,deletePhone } from '../API/api'



const MobileDetail = () => {

  const [phone,setPhone]=useState({});

  const { id }=useParams();
  let navigate=useNavigate();
  
  
  useEffect(()=>{
    getAllPhonesDetails();
  },[])

 
  const getAllPhonesDetails= async()=>{
    let response=await getPhoneById(id);
    setPhone(response.data);
  }

  const deletePhoneDetails= async(id)=>{
    await deletePhone(id);
    navigate('/');
  }

  // console.log(phone);
  
  return (
    <div className='bg-zinc-400'>
      <div className="overflow-x-auto flex justify-center items-center">
    <table className="table w-1/3 rounded-3xl mt-4">
      <tbody>
        <tr>
          <th>1</th>
          <td>Model Name</td>
          <td>{phone.name}</td>
        </tr>
        <tr>
          <th>2</th>
          <td>company Name</td>
          <td>{phone.company}</td>
        </tr>
        <tr>
          <th>3</th>
          <td>ScreenSize</td>
          <td>{phone.screenSize}</td>
        </tr>
        <tr>
          <th>4</th>
          <td>Storage</td>
          <td>{phone.storage}</td>
        </tr>
        <tr>
          <th>5</th>
          <td>Ram</td>
          <td>{phone.ram}</td>
        </tr>
        <tr>
          <th>6</th>
          <td>Battery</td>
          <td>{phone.battery}</td>
        </tr>
        <tr>
          <th>7</th>
          <td>Operating System</td>
          <td>{phone.os}</td>
        </tr>
        <tr>
          <th>8</th>
          <td>Price</td>
          <td>{phone.price}</td>
        </tr>
      </tbody>
    </table> 
  </div>
  <div className='flex justify-center'>
  <Link to='/'>
  <button className="btn m-4">👈 Go Back</button>
  </Link>
  <button className="btn m-4">🛒 Buy Now</button>
  <Link to={`/editmobiledetails/${phone._id}`}>
    <button className="btn m-4">Edit</button>
  </Link>
  <button className="btn m-4" onClick={()=> deletePhoneDetails(phone._id)}>Delete</button>
  </div>
    </div>
  )
}

export default MobileDetail
