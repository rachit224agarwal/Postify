import React, { useState } from 'react'
import axios from 'axios'

const Api =  () => {
    const [data,setData] = useState([])
    const getData = async ()=>{
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
        setData(response.data)
        console.log(data)
        
    }

  return (
    <div>
      <button onClick={getData} className='bg-lime-500 px-4 py-2 text-xl font-semibold rounded ml-40 mt-12'>Get Data</button>
      <div className='bg-slate-600 p-4 mt-2 flex flex-wrap justify-evenly'>
        {data.map(function(elem,idx){
            return <div key={idx} className='bg-indigo-300 p-6 mb-6 w-80 rounded-3xl'>
                <img className='h-48 w-48 object-cover ml-10 rounded-full' src={elem.download_url}/>
                <h1 className='mt-4 text-center'>Author:{elem.author}</h1>
                <button className='bg-green-500 px-4 py-2 ml-20 rounded-xl mt-3 hover:active:scale-110'>Download</button>
            </div>
        })}
      </div>
    </div>
  )
}

export default Api
