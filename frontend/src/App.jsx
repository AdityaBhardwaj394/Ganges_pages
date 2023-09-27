import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home.jsx';
import Editbook from './pages/editbook.jsx';
import Deletebook from './pages/deletebook.jsx';
import Createbook from './pages/createbook.jsx';
import Showbook from './pages/showbook.jsx';
const App = () => {
  return (
    <Routes>
     <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<Createbook />} />
      <Route path='/books/details/:id' element={<Showbook />} />
      <Route path='/books/edit/:id' element={<Editbook />} />
      <Route path='/books/delete/:id' element={<Deletebook />} />
      
    </Routes>

  )
}

export default App