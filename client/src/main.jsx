import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route,Routes } from 'react-router'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import Fmembers from './components/Fmembers'
import Teams from './components/Teams'
import Gallary from './components/Gallary'
import Post from './components/Post'
import Login from './components/Login'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path='/' element={<Navbar />} >
          <Route path='' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='login' element={<Login />}/>
          <Route path='posts' element={<Post />}/>
          <Route path='teams' element={<Teams />}/>
          <Route path='events' element={<Events />}/>
          <Route path='members' element={<Fmembers />}/>
          <Route path='gallary' element={<Gallary />}/>
      </Route>
     </Routes>
    </BrowserRouter>
  </StrictMode>,
)
