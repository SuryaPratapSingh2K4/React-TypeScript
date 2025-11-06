// import Funcomp from "./compenents/Funcomp"
import './App.css'
import EachUser from './compenents/EachUser'
import Looping from './compenents/Looping'
import Navbar from './compenents/Navbar'
import UserAPI from './compenents/UserAPI'
// import ConditionalRender from './compenents/ConditionalRender'
// import Counter from "./compenents/counter"
// import EventHandling from './compenents/EventHandling'
import Form from './compenents/form'
// import Looping from './compenents/Looping'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<UserAPI/>}/>
        <Route path='/user/:id' element={<EachUser/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/loop' element={<Looping/>}/>
      </Routes>
    </Router>

  )
}

export default App
