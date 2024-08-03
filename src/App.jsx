import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment=()=>{
    setCount(count+1);
    console.log(count)
  }
  useEffect(()=>{
    increment();
  },[]);
  return (
    <>
    <div className="nav">
    <span className='topT'>Balance</span> 
     <span className='float'> {count}</span> 
    </div>
      <div className='row'>     
      <div className="circle" onClick={increment}>
    
      </div>
      </div>
      <h1>Ahadu Coin</h1>
      <div className="card">
       
        <p>
       tap and earn rewards
        </p>
      </div>
    </>
  )
}

export default App
