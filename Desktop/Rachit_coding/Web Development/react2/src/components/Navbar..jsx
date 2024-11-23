import React from 'react'

const Navbar = () => {
  return (
    <>
     <nav className='flex justify-evenly bg-emerald-400 '>
        <h2 className='mr-72 text-3xl font-semibold'>React.Js</h2>
        <div className='flex gap-20 text-2xl'>
        <h2>Installation</h2>
        <h2>Components</h2>
        <h2>Frameworks</h2>
        <h2>Docs</h2>
        </div>     
     </nav> 
    </>
  )
}

export default Navbar