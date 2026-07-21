import { useState } from 'react'



function App() {
 
    const [color,setcolor]=useState("pink")
  return (
    <>
    <div className='w-full h-screen'style={{backgroundColor:color}}>
      <div className='flex flex-wrap rounded-4xl bg-amber-300 bottom-3.5 fixed justify-center px-3 py-2 mx-100'>
        <button onClick={()=>setcolor("Red")}
        className='bg-red-500 p-1.5 rounded-2xl mx-2'>Red</button>
        <button onClick={()=>setcolor("green")}
        className='bg-green-500 p-1.5 rounded-2xl mx-2'>green</button>
        <button onClick={()=>setcolor("blue")}
        className='bg-blue-500 p-1.5 rounded-2xl mx-2'>Blue</button>
        <button onClick={()=>setcolor("black")}
        className='bg-black p-1.5 rounded-2xl mx-2 text-white'>Black</button>
        <button onClick={()=>setcolor("white")}
        className='bg-white p-1.5 rounded-2xl mx-2 text-black'>White</button>
        <button onClick={()=>setcolor("violet")}
        className='bg-violet-500 p-1.5 rounded-2xl mx-2 text-black'>violet</button>
        <button onClick={()=>setcolor("purple")}
        className='bg-purple-700 p-1.5 rounded-2xl mx-2 text-black'>Purple</button>
      </div>
    </div>
    </>
  )
}

export default App
