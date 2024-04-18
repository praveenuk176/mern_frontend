import React, { useState } from 'react'
import '../Css/Home.css'

const Home = () => {
    const [count, setCount]= useState(0);
    function likeCount(){
        setCount(count+1)
    }
    function dislikeCount(){
        if(count>0){
            setCount(count-1)
        }
    }
    const [change, setChange]= useState(0);
    function changeCount(){
        setChange(change+1)
    }

  return (
    <div className='container1'>
        <div>
            <h1 id='he1'>Welcome To ClubCricket</h1>
        </div>
        <p id='p1'>Club cricket is a mainly amateur, but still formal form of the sport of cricket, usually involving teams playing in competitions at weekends or in the evening. There is a great deal of variation in game format although the Laws of Cricket are observed. The main nations that club cricket is played in include Pakistan, England, Australia, South Africa, Sri Lanka, West Indies, New Zealand, Bangladesh.</p>
        <div className='container'>
        <div className='container2'>
        <iframe
            src = 'https://www.iplt20.com/video/53799/m25-mi-vs-rcb--match-highlights?tagNames=2024' 
            allowFullScreen >             
        </iframe>
        <h1>{count}</h1>
        <button onClick={likeCount}>Like</button>
        <button onClick={dislikeCount}>Dislike</button>
        </div>
        <div className='container3'>
        <img src='https://img.jagranjosh.com/imported/images/E/GK/Rohit-sharma-pics.webp' width='300px' height='150px' ></img>
        <h1>{change}</h1>
        <button onClick={changeCount}>Like</button>
        </div>
        </div>
    </div>
  )
}

export default Home