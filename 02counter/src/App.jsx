import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
let[counter,setcounter] = useState(5);
const addvalue = ()=>{
  counter=counter+1;
  setcounter(counter)
  console.log("clicked "+counter)
}
const removed = ()=>{
  counter=counter-1;
  setcounter(counter)
  console.log("clicked "+counter)
}
  return (
    <>
    <h1>Chai Aur Code</h1>
    <h2>Counter Value : {counter}</h2>
    
    
    <button onClick={addvalue}>Add Value {counter}</button>
    <br/>
    <button onClick={removed}>Remove Value {counter}</button>
    <footer> footer: {counter}</footer>
    </>
  )
}

export default App
