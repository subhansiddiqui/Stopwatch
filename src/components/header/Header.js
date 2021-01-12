import React from 'react';
import timerPic from './timer.png'
import './header.css'


let Header = () => {
 return <div id='containerHeader'>
       Timer App
         <img src={timerPic} width='65px' height='65px'  style={{color: 'red'}}    />
 </div>


}
export default Header