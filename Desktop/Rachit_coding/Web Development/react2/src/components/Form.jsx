import React, { useState } from "react"

const Form = () => {
const [username , setUsername] = useState('')
  const sumbithandler = (e)=>{
  e.preventDefault()
  console.log(username)
  setUsername('')
}
return (
  <div className='flex justify-center '>
    <form onSubmit={(e)=>{
      sumbithandler(e)
    }}>
      <input 
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
        // console.log("hello")  
        // console.log(e.target.value)
      }}
      className='bg-black p-4 m-5 rounded text-white'
      type="text" 
      placeholder='Enter Your Name' />
      <button className='bg-lime-500 px-2 py-3 rounded m-5 text-xl'>Submit</button>
    </form>
  </div>
)
}
export default Form