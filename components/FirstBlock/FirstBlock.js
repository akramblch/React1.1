import React from 'react'
import Home1 from '../../assets/home1.png'
import './frstblock.css'
import Home2 from '../../assets/home2.png'
import Home3 from '../../assets/home3.png'

const FirstBlock = () => {
  return (
    <section className='container'>
      <div className='all-imgs'>
      <div>
          <img className='home1' src={Home1}/>
        </div>
        <div>
          <img className="home2" src={Home2}/>
        </div>
        <div>
          <img className="home3" src={Home3}/>
        </div>
      </div>
    </section>
  )
}

export default FirstBlock;