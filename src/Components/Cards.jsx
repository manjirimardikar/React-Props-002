import React from 'react'
import './Cards.css';
import {FaShareAlt,FaHeart,FaCommentAlt} from 'react-icons/fa';


const Cards = (props) => {
  return (
    <div className='Cards' style = {{backgroundImage:`url(${props.backgroundimage})`}} >
     <div className='maincontent'>
      <div className='leftCard'>
      <div className='leftcardupperdiv'>
    <div className='leftupperdivleft'>
   <img src={props.imgicon} />
    </div>
    <div className='leftupperdivright'>
      <div className='rightuppersecondlastdiv'>
        <h6>{props.moviename}</h6>
        <p>{props.year},{props.actor}</p>
        </div>
        <div className='rightupperlastdiv'>
            <button>{props.time}</button>
            <p>{props.genere}</p>
        </div>
    </div>
      </div>
      <div className='leftcardmiddlediv'>
          <p>{props.moviedescription}</p>
      </div>
      <div className='leftcardlowerdiv'>
      <FaShareAlt/>
      <FaHeart />
      <FaCommentAlt />
      </div>
      </div>
      <diV className='rightcard'  >
           
      </diV>
      
    </div>
    </div>
  )
}

export default Cards
