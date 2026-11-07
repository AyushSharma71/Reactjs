import { Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/contact'
import About from './components/About'
import User from './components/user'
import Github  from './components/Github'
import Check from './components/Check'


function App() {

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/user/check' element={<Check />} />
          <Route path='/user/:userid' element={<User />} />
          <Route path='/github' element={<Github />} />
          </Routes>
          </main>
          <Footer />
    </>
  )
}

export default App
