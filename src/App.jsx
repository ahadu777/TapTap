import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [st,setSt]=useState('')
  const increment=()=>{
    setCount(count+1);
    setSt('scale')
    console.log(count)
  }
 
  return (
    <>
    <div className="nav">
    <span className='topT'>Balance</span> 
     <span className='float'> {count} coins</span> 
    </div>
      <div className='row'>     
      <div className={'circle '+ st } onClick={increment}>
    
      </div>
      </div>
      <h3 className='golden'>Thor Coin</h3>
      <div className="card">
       
        <p className='golden'>
       tap and earn rewards
        </p>
      </div>
      <div className='footer golden'>
        <span>Home</span>Earn<span></span>Reward<span>Wallet</span>
      </div>
    </>
  )
}

export default App
