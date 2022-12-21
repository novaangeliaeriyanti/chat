import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Nova chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/6607387/pexels-photo-6607387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>George</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar