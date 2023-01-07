import React, {useContext, useState} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContextProvider, AuthContext } from './context/auth'

import SignIn from './pages/SignIn'
import UsersRandom from './pages/UsersRandom'
import Dogs from './pages/Dogs'
import LittelCats from './pages/LittelCats'
import Clients from './pages/Clients'
import Client from './pages/Client'

function App() {

  const authContext = useContext(AuthContext)
  console.log(authContext?.isLogged)

  return (
    <div>
      
        <BrowserRouter>
          <AuthContextProvider>
            <Routes>
              <Route path='/' element={!authContext?.isLogged ? <Navigate to="/signin"/> : <UsersRandom/>}  />
              <Route path='/signin' element={!authContext?.isLogged ? <SignIn/> : <Navigate to="/"/>}/>
              <Route path='/cats' element={!authContext?.isLogged ? <Navigate to="/signin"/> : <LittelCats/>}/>
              <Route path='/dogs' element={!authContext?.isLogged ? <Navigate to="/signin"/> : <Dogs/>}/>
              
              <Route path='/clients' element={!authContext?.isLogged ? <Navigate to="/signin"/> : <Clients/>} />
              <Route path='/clients/:id' element={!authContext?.isLogged ? <Navigate to="/signin"/> : <Client/>} />
            </Routes> 
          </AuthContextProvider>     
        </BrowserRouter>
      
    </div>
  )
}

export default App
