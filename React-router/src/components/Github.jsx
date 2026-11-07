import { useState,useEffect } from 'react';


function Github() {
    const [data,setData] =useState([]);
    useEffect(()=>{
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then((res)=>res.json())
        .then((data)=>setData(data));
    })
  return (
    <div className='bg-gray-700 text-center'>
        <h1 className='text-orange-700 text-2xl'>Followers:{data.followers}</h1>
        <img 
        src={data.avatar_url} alt="image" width={350} />
    </div>
  )
}

export default Github

