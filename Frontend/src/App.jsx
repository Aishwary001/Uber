
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import { UserDataContext } from './context/UserContext'
import { useContext } from 'react'

function App() {

  const ans = useContext(UserDataContext);
  console.log(ans);
  

  return (
    <>
      <div className=''>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/login' element={ <UserLogin/> } />
          <Route path='/signup' element={ <UserSignup /> } />
          <Route path='/captain-signup' element={ <CaptainSignup /> } />
          <Route path='/captain-login' element={ <CaptainLogin /> } />
        </Routes>
      </div>
    </>
  )
}

export default App
