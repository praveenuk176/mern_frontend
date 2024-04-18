import React from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Content from './Components/Content'
import Footer from './Components/Footer'
import TodoList from './Components/TodoList'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header/>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/content' element={<Content/>} />
          <Route path='/todo' element= {<TodoList />} />
        </Routes>
        <div>
          <Footer/>
        </div>
      </Router>
    </div>
  )
}

export default App