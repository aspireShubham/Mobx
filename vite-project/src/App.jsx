import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Count } from './components/Count'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserDetailsComponent } from './Components/UserDetailsComponent'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}

        </button>
             {/* <Count/> */}
             <UserDetailsComponent/>
  
          <p>Shubham Deshmukh</p>
      </div>
     
    </>
  )
}

export default App
