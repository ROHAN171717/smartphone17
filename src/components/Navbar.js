import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-slate-900 p-4">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case ml-4 text-3xl text-white hover:bg-emerald-500 bg-orange-700">R_17</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      {/* <li><a href='/addmobile' className='text-white'>Add Mobile</a></li> */}
      {/* <li><a className="btn btn-ghost normal-case text-3xl bg-blue-500 hover:bg-lime-200">Add Mobile</a></li> */}
      <Link to='/addmobile'>
      <button class="btn mr-6 bg-red-200 hover:bg-amber-200 text-black text-xl ">Add Mobile</button>
      </Link>
    </ul>
  </div>
</div>
  )
}

export default Navbar
