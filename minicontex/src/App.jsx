
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  
  return (
    <UserContextProvider>
      <h1> Hello React</h1>
      <Login></Login>
      <Profile></Profile>
      
    </UserContextProvider>
  )
}

export default App
