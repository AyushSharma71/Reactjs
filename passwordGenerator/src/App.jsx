import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
   const [length,setLength] = useState(8);
   const [password,setPassword] = useState("");
   const [numbersAllowed,setNumbersAllowed] =useState(false);
   const [charactersAllowed,setCharactersAllowed] = useState(false);

   const passwordGenerator =useCallback(() =>{
    let pass="";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numbersAllowed) str +='0123456789';
    if(charactersAllowed) str +="[]{}*&!@#$%^?`~"

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length +1)

        pass +=str.charAt(char);
      
    }

    setPassword(pass);
   },[length,numbersAllowed,charactersAllowed])

   useEffect(()=>{passwordGenerator()},
   [length,numbersAllowed,charactersAllowed])

   const passwordRef = useRef(null)

   const copyPassword = useCallback(() =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)

   })
  return (
   <>
   <h1 className='text-white text-4xl text-center m-7'>Password Generator</h1>
   <center>
   <div className='bg-gray-500 h-50 w-[50%] mt-8'>

    <input type="text" 
    value={password}
    className='text-black bg-white p-3 m-4 w-80 rounded-2xl cursor-pointer'
    readOnly 
    ref={passwordRef}/>

    <button 
    className='bg-blue-600 px-6 py-3 rounded-2xl cursor-pointer active:bg-blue-300 active:scale-95'
    onClick={copyPassword}>copy</button>


    <div className='flex items-center justify-center gap-3.5 mt-10'>
      <input type="range" 
      className='cursor-pointer'
      min={6}
      max={100}
      value={length}
      onChange={(e)=>{setLength(e.target.value)}} />
        <h4 className='text-lg text-orange-400'>Length:({length})</h4> 
        <input type="checkbox"
        defaultChecked ={numbersAllowed}
        id='numberInput'
        onChange={()=>{
          setNumbersAllowed((prev) =>!prev)
        }} /><label className='text-lg text-orange-400'>Numbers</label>
        <input type="checkbox"
         defaultChecked ={charactersAllowed}
        id='characterInput'
        onChange={()=>{
          setCharactersAllowed((prev) =>!prev)
        }}  /><label className='text-lg text-orange-400'>Characters</label>
    </div>
   </div>
   </center>
   </>
  )
}

export default App
