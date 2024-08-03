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
