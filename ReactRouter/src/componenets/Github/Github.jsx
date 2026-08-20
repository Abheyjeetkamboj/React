import React, { useEffect, useState } from 'react'

function Github() {
        const[data,setdata] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/abheyjeetkamboj')
        .then(response=> response.json())
        .then(data=>{
            console.log(data);
            setdata(data);
        })
    },[])
  return (
    
    <>
    <h1 className='text-3xl text-center bg-gray-500 p-4'>Github Name:{data.login}</h1>
    <h1 className='text-3xl text-center bg-gray-500'>Github Followers:{data.followers}</h1>
    <h1 className='text-3xl text-center bg-gray-500 p-4'>Github Repositories:{data.public_repos}</h1>
    console.log(data);
    </>
  )
}

export default Github