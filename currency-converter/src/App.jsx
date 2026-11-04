import { useState } from 'react'
import './index.css'
import Card from './components/Card'

function App() {
  
let obj ={
  name:"Ayush",
  age:21,
}
// It can be array of objects. so,we have to use for loops or map functions.

  
  return (
    <>
     <Card name={obj.name} age={obj.age}/>
    </>
  )
}

export default App
