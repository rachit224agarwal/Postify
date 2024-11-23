import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' py-6 px-8 text-l font-semibold flex justify-between items-center' >
      <Link to='/'><h2><strong className='text-5xl font-serif' >React</strong> v18.3.1</h2></Link>
      <div className='flex gap-10 text-xl' >
        <Link to='/' >Home</Link>
        <Link to='/installation' >Installation</Link>
        <Link to='/docs' >Documentation</Link>
        <Link to='/community' >Community</Link>
      </div>
    </div>
  )
}

export default Header
