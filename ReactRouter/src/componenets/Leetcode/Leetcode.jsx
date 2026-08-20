import React, { useEffect, useState } from 'react'

function Leetcode() {
  const [data,setdata]= useState([]);
  useEffect(()=>{
    fetch()
    .then(response => response.json)
    .then(data=>{
      console.log(data);
      setdata(data);
    })
  },[])
  console.log(data);
  return (
    <>
    <h1 className='text-3xl bg-gray-500 p-4 text-center'>Leetcode</h1>
    <h1 className='text-2xl bg-gray-500 p-2 text-center'>Name: </h1>
    <h1 className='text-2xl bg-gray-500 p-2 text-center'>Question Solved:{data.totalSolved} </h1>
    <h1 className='text-2xl bg-gray-500 p-2 text-center'>Longest Streek: </h1>
    </>
  )
}

export default Leetcode