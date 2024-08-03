import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [coins, setCoins] = useState(100)
  const [st,setSt]=useState('')
  const increment=()=>{
    setCount(count+1);
    setSt('scale');
    coins > 0 ? setCoins(coins-1) : refill();
  }
 
  const refill = ()=>{
    setTimeout(()=>{setCoins(100)});
  }
  return (
    <>
    <div className="nav">
    <span className='topT'>Balance</span> 
     <span className='float golden'> {count} 🪙</span> 
    </div>
    <h1 className='float white'>+1</h1>
      <div className='row'>    
      <div className={'circle '+ st } onClick={increment}>
    
      </div>
      </div>

      <div className="flex">
      <input type="range" value={coins} />
      <b className='white'>energy level {coins} coins</b>
      </div>

      <div className='footer golden'>
        <span className='btn'>🏠 Home</span>
        <span className='btn'>💰 Earn</span>
        <span className='btn'>🏆 Reward</span>
        <span className='btn'> 💵 Wallet</span>
      </div>
    </>
  )
}

export default App
