import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import HeadNTail from './pages/Head&Tail'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/head&tail' element={<HeadNTail />} />
      </Routes>
    </>

  )
}

export default App
