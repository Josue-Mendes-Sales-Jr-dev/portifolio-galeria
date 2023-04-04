import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contacts } from './pages/Contacts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
