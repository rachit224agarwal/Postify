import React from 'react'

const Docs = () => {
  return (
    <div>
      <h1 className='ml-8 my-3 font-serif text-3xl' >Getting started with <strong className='text-sky-500' >React</strong> </h1>
      <p className='py-3 px-8  ' >As its official tagline states, React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications.To build for the web, developers use React in tandem with ReactDOM. React and ReactDOM are often discussed in the same spaces as — and utilized to solve the same problems as — other true web development frameworks. When we refer to React as a "framework", we're working with that colloquial understanding.React's primary goal is to minimize the bugs that occur when developers are building UIs. It does this through the use of components — self-contained, logical pieces of code that describe a portion of the user interface. These components can be composed together to create a full UI, and React abstracts away much of the rendering work, leaving you to concentrate on the UI design.</p>
      <h1 className='ml-8 my-3 font-serif text-3xl' >Use cases</h1>
      <p className='py-3 px-8' >Unlike the other frameworks covered in this module, React does not enforce strict rules around code conventions or file organization. This allows teams to set conventions that work best for them, and to adopt React in any way they would like to. React can handle a single button, a few pieces of an interface, or an app's entire user interface.While React can be used for <strong className='text-blue-400 font-extralight' >small pieces of an interface</strong>, it's not as easy to "drop into" an application as a library like jQuery, or even a framework like Vue — it is more approachable when you build your entire app with React.In addition, many of the developer-experience benefits of a React app, such as writing interfaces with JSX, require a compilation process. Adding a compiler like Babel to a website makes the code on it run slowly, so developers often set up such tooling with a build step. React arguably has a heavy tooling requirement, but it can be learned.This article is going to focus on the use case of using React to render the entire user interface of an application with the support of Vite, a modern front-end build tool.</p>
      <h1 className='ml-8 my-3 font-serif text-3xl' >How does React use <strong className='text-yellow-300' >JavaScript</strong>?</h1>
      <p className='py-3 px-8' >React utilizes features of modern JavaScript for many of its patterns. Its biggest departure from JavaScript comes with the use of JSX syntax. JSX extends JavaScript's syntax so that HTML-like code can live alongside it.</p>

    </div>
  )
}

export default Docs
