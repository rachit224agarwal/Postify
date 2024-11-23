import React from 'react'

const Installation = () => {
  return (
    <div>
        <h3 className='text-sky-500 px-4 py-2 ml-5' >Learn React :- </h3>
      <h1 className='ml-8 my-3 font-serif text-3xl' >Installation</h1>
      <p className='py-3 px-8 w-6/12 ' >React has been designed from the start for gradual adoption. You can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to an HTML page, or start a complex React-powered app, this section will help you get started.</p>
      <h1 className='ml-8 my-3 font-serif text-2xl' >Try React locally</h1>
      <p className='py-3 px-8 w-6/12' >To try React locally on your computer, download this HTML page. Open it in your editor and in your browser</p>
      <p className='py-3 px-8 font-mono bg-slate-700 flex w-1/2 ml-9 mb-2' >npm install -g create-react-app</p>
      <p className='py-3 px-8 font-mono bg-slate-700 flex w-1/2 ml-9 mb-2' >create-react-app --version</p>
      <p className='py-3 px-8 font-mono bg-slate-700 flex w-1/2 ml-9 mb-2' >mkdir newfolder</p>
      <p className='py-3 px-8 font-mono bg-slate-700 flex w-1/2 ml-9 mb-2' >cd newfolder (your folder name)</p>
      <p className='py-3 px-8 font-mono bg-slate-700 flex w-1/2 ml-9 mb-2' >npx create-react-app reactfirst</p>
    </div>
  )
}

export default Installation
