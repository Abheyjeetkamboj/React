import { useState } from 'react'

import './App.css'
import {Card} from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  // let myobj ={age:18,name:"Abheyjeet"};
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 '>Tailwind test</h1>
      <h1 className='text-white  bg-blue-400 p-4 rounded-4xl align-middle' >hello</h1>
      

    {/* <Card username="Abheyjeet"/> */}
    {/* <Card name = "Abheyjeet" obj ={myobj}/> */}
    <Card name="Abheyjeet" btn = "Click me" />
    <Card name="Mitansh" btn="Visit me"/>
    <Card name="Aseem" />
    

      <div className="min-h-screen flex items-center justify-center bg-slate-900 p-10">

        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-2xl">

          <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="Sarah Dayan"
          />

          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">

            <blockquote>
              <p className="text-lg font-medium text-slate-700 dark:text-slate-200">
                "Tailwind CSS is the only framework that I've seen scale on
                large teams. It's easy to customize, adapts to any design,
                and the build size is tiny."
              </p>
            </blockquote>

            <figcaption className="font-medium">

              <div className="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>

              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>

            </figcaption>

          </div>

        </figure>

      </div>



    </>
  )
}

export default App



