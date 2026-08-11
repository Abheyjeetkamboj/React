import { useState,useCallback,useEffect } from 'react'


function App() {
  const [length,setlength] = useState(8)
  const [numberallowed,setnumber] = useState(false);
  const [charallowed,setchar] = useState(false);
  const[password,setpassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberallowed) str += "1234567890";
    if(charallowed) str+= "!@#$%^&*";
    for(let i= 0;i<length;i++){
      let xx= Math.floor(Math.random()*str.length+1);
      pass+=  str.charAt(xx);
    }
    setpassword(pass);
  },[length,numberallowed,charallowed,setpassword])
  useEffect(()=>{passwordGenerator()},[length,numberallowed,charallowed,passwordGenerator])
  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700'>
    <h1 className='text-white text-center m-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
      <input 
      type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
setlength(e.target.value)
        }}
      />
      <label className='text-orange-400'>Length: {length}</label>

    </div>
    
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberallowed}
          id='numberinput'
          onChange={()=>{
            setnumber((prev)=>!prev);
          }}
          />
         <label className='text-orange-400'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charallowed}
          id="characterinput"
          onChange={()=>{
            setchar((prev)=> !prev);
          }}
          />
          <label className='text-orange-400'>Characters</label>
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default App
