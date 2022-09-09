import React,{useState} from 'react'
import { addPhone } from '../API/api'
import { useNavigate } from 'react-router-dom'

const initialValue={
  name:'',
  img:'',
  company:'',
  screenSize:'',
  storage:'',
  os:'',
  battery:'',
  ram:'',
  price:'',
  img:''
}

const AddMobile = () => {

  const [phone,setPhone]=useState(initialValue);
  const { name, company, screenSize, storage, os, battery, ram, price, img }=phone;

  let navigate=useNavigate();

  const addMobiledetails= async()=>{
    const response=await addPhone(phone);
    navigate('/');
  }

  const onValueChange=(e)=>{
    setPhone({...phone,[e.target.name]:e.target.value})
  }


  return (
    <div className='flex justify-center my-4'>
      <div class="p-10 card  bg-zinc-500 w-1/3 ">
        <div class="form-control">
        <div className='flex justify-center'>
        <h1 className='font-bold text-2xl mb-4 bg-red-400 rounded-xl text-center p-2 text-zinc-800'>Add SmartPhone</h1>
        </div>
            <label class="label">
            <span class="label-text">Mobile Name</span>
            </label> 
            <input type="text" placeholder="Mobile Name" class="input" onChange={(e)=> onValueChange(e)} name='name' value={name}/>
            <label class="label">
            <span class="label-text">Company Name</span>
            </label> 
            <input type="text" placeholder="Company Name" class="input" onChange={(e)=> onValueChange(e)} name='company' value={company}/>
            <label class="label">
            <span class="label-text">ScreenSize</span>
            </label> 
            <input type="text" placeholder="ScreenSize" class="input" onChange={(e)=> onValueChange(e)} name='screenSize' value={screenSize}/>
            <label class="label">
            <span class="label-text">Storage</span>
            </label> 
            <input type="text" placeholder="Storage" class="input" onChange={(e)=> onValueChange(e)} name='storage' value={storage}/>
            <label class="label">
            <span class="label-text">Ram</span>
            </label> 
            <input type="text" placeholder="Ram" class="input" onChange={(e)=> onValueChange(e)} name='ram' value={ram}/>
            <label class="label">
            <span class="label-text">Image URL</span>
            </label> 
            <input type="text" placeholder="Img URL" class="input" onChange={(e)=> onValueChange(e)} name='img' value={img}/>
            <label class="label">
            <span class="label-text">Battery</span>
            </label> 
            <input type="text" placeholder="Battery" class="input" onChange={(e)=> onValueChange(e)} name='battery' value={battery}/>
            <label class="label">
            <span class="label-text">Operating System</span>
            </label> 
            <input type="text" placeholder="Operating System" class="input" onChange={(e)=> onValueChange(e)} name='os' value={os}/>
            <label class="label">
            <span class="label-text">Price</span>
            </label> 
            <input type="text" placeholder="Price" class="input" onChange={(e)=> onValueChange(e)} name='price' value={price}/>
        </div>
        <div className='flex justify-center'>
        <button className="btn border-none bg-blue-500 hover:bg-orange-400 w-1/2 text-lg mt-4" onClick={()=>addMobiledetails()}>Add Smartphone</button>
        </div>
     </div>
    </div>
  )
}

export default AddMobile
