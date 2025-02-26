import './App.css'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage';
import PrivateRoute from './components/wrapper/PrivateRoute';
import LoginPage from './components/LoginPage'

function App() {


  return (
    <>
       <BrowserRouter>
       <Routes>
          <Route path='/' element={<PrivateRoute><LandingPage /></PrivateRoute>}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/login' element={<LoginPage />}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App


