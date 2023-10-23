import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
      <div>
        <ul className="navigation">
          <li><a href='#'> Home</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>hi</a></li>
          <li><a href="#">contact us</a></li>
        </ul>
      </div>
      <section className='container'>
           
      </section>
      <div className='heading'>
        <h1>Let's ride our future</h1>
        <h1 className='text'>artificial intelligence</h1>
        <p>click here to regiter for the events</p>
        <button className='hover-button'>Register</button>
      </div>

    </div>
  )
}

export default App
