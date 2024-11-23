import React from 'react'

const Card = (props) => {

  return (
    <div className='mr-5 bg-slate-400 inline-block p-7 h-76 w-56 text-center rounded-2xl  '>
      <img className='h-28 w-28 rounded-full ml-5 mb-3' src={props.photo}/>
      <h1 className='text-xl font-semibold'>{props.name}</h1>
      <h2 className ="font-extralight text-sm">{props.work} , {props.age}</h2>
      <button className='bg-emerald-400 p-2 mt-4 rounded'>Add Friend</button>
    </div>
  )
}

export default Card
