import './App.css'
import { Outlet } from 'react-router-dom'


export default function App() {

  return (
    <div>
      <h1>Restaurant Selector</h1>
      {/* This error wants a specific interface to adjust types */}
      <Outlet/>
    </div>
    
  )
}


