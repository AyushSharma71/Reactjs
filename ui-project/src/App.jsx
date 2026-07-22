import './App.css'
import Center from './Components/center'
import Navbar from './Components/Navbar'
function App() {

  const users= [
    {
      img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ullam velit fugit alias laboriosam nesciunt?",
      color:"blue",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmclMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ullam velit fugit alias laboriosam nesciunt?",
      color:"green",
      tag:"Underserved"
    },
    {
      img:"https://images.unsplash.com/photo-1507206130118-b5907f817163?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ullam velit fugit alias laboriosam nesciunt?",
      color:"orange",
      tag:"Underbanked"
    }
  ]
  return (
    <>
      < Navbar />
      < Center  users= {users}/>
    </>
  )
}

export default App
