import { useState } from "react";

function App() {
  // jitne jagah counter hai usko update kr dega setcounter mein logic likhna pdega 
  let [counter,setcounter] = useState(3)

  function addvalue(){
     if(counter <20){
       setcounter(counter+1)
      }
      else{
       return
     }
  }
  function decreasevalue(){
    if(counter >0){
    setcounter(counter-1)
    }else{
      return
    }
  }
  return (
    <>
      <h1><center>Counter game</center></h1>

      <h3><center>counter value: {counter}</center></h3>
      <center>
      <button onClick={addvalue}>Add value</button>
      <br /><br />
      <button onClick={decreasevalue}>Remove value </button>
      </center>
    </>
  )
}

export default App
