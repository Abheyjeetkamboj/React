import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}></div>
    
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap bg-white rounded p-4 justify-center gap-3 shadow-lg px-3 py-2'>

      <button onClick={()=>setColor("red")}className='outline-none px-4 spy-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}> Red</button>
      <button onClick={()=>setColor("green")} className='outline-none px-4 spy-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}> Green</button>
      <button onClick={()=>setColor("yellow")} className='outline-none px-4 spy-1 rounded-full text-white shadow-lg' style={{backgroundColor:"yellow"}}> Yellow</button>
      <button onClick={()=>setColor("black")} className='outline-none px-4 spy-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}> black</button>
      <button onClick={()=>setColor("brown")} className='outline-none px-4 spy-1 rounded-full text-white shadow-lg' style={{backgroundColor:"brown"}}> Brown</button>
      <button onClick={()=>setColor("white")} className='outline-none px-4 spy-1 rounded-full text-black shadow-lg' style={{backgroundColor:"white"}}> White</button>

      </div>
    </div>
    </>
  )
}

export default App
