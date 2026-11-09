import {Themeprovider} from './context/contextapi'
import { useState,useEffect } from 'react'
import './App.css'
import ThemeBtn from './components/Themebtn';
import Card from './components/Card';


function App() {

  const [themeMode,setThemeMode] = useState("light");

  const lightMode=()=>{
    setThemeMode("light")
  }
  const darkMode =() =>{
    setThemeMode("dark");
  }

useEffect(()=>{
  document.querySelector('html').classList.remove("dark","light");
  document.querySelector('html').classList.add(themeMode);

},[themeMode])

  return (
    <Themeprovider value={{themeMode,darkMode,lightMode}}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
                < Card />
          </div>
        </div>
      </div>

    </Themeprovider>
  )
}

export default App
