import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams();
  return (  
    <>
    <h1 className='text-3xl text-center p-4 bg-gray-500'>User:{id}</h1>
    </>
  )
}

export default User