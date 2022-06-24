import React from 'react'
import Products from '../Products/Products'
import "./Home.css"
function Home() {
  return (
    <div className='home'>
        <div className='back-img'>
            <img src="https://raw.githubusercontent.com/gopimudumal99/emart/master/public/assets/bg.jpg" alt="back-ground-img" />
        </div>

    <Products/>
    </div>
  )
}

export default Home