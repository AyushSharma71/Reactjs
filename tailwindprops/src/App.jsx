import { useState } from 'react'
import Card from '../components/Card'


function App() {
  // let obj={
  //   name:"hi",
  //   no:4322,
  // }

  return (
    <>
      <h1 className='bg-pink-500 text-white p-4 rounded-xl text-center mb-4'>Tailwind test</h1>


    {/* 
    props ke andr obj,array sab kuch bhej skte hain
     */}
      <Card name="Landscape potrait"/>
      <Card name='potrait'/>
    </>
  )
}

export default App
