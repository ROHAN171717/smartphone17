import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { getPhones } from '../API/api'


const AllMobile = () => {

  const [phones, setPhones]=useState([]);

  useEffect(()=>{
    getAllPhones();
  },[]);

  const getAllPhones= async()=>{
    let response=await getPhones();
    setPhones(response.data);
  }


  return (
    <div className='m-4 ml-28'>
      {phones.map((phone)=>(
        <div className="card w-1/5 bg-cyan-900 shadow-xl hover:bg-blue-400 float-left m-4" key={phone._id}>
        <figure className="px-10 pt-10">
            <img src={phone.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title text-white">{phone.name}</h2>
            <h2 className="card-title text-white">{phone.price} ₹</h2>
            <div className="card-actions">
              <Link to={`/mobiledetails/${phone._id}`}>
              <button className="btn bg-orange-500 hover:bg-yellow-400 hover:text-black text-lg" >View Details</button>
              </Link>
            </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default AllMobile
