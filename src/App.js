import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './Header/Header'
import { Login } from './Login/Login'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <Route path='/login' render={ () => <Login />} />        
      </div>
    </BrowserRouter>
  )
}

export default App;
