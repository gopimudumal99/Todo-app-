import React from 'react'
import Products from '../Products/Products'
import "./Home.css"
function Home() {
  return (
    <div className='home'>
        <div className='back-img'>
            <img src="https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="back-ground-img" />
        </div>

    <Products/>
    </div>
  )
}

export default Home