import React, { useContext } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './componants/Login'
import Profile from './componants/Profile'


const App = () => {
  return (
    <UserContextProvider>
      <h1>vishal react</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App