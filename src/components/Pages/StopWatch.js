import React from 'react';
import './StopWatch.css'
import { buildStyles , CircularProgressbarWithChildren   } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



let containerSetInterval = null
let minutes = 0;
let stringMin = '0'
let resetBoolean = false

let StopWatch = ( {RunnningFunc , startedTimerUpdateState , stopTheTimer , secondsObj  , isTimerStartedBoolean , ifwantTostopBoolean , resetSeconds}  ) => {

// console.log(secondsObj.seconds);

if(secondsObj.seconds === 60){
  minutes = minutes + 1;
}

return <div id='containerTimer'>



<div   style={{width: '400px' , marginLeft : 'auto' , marginRight : 'auto'}}    >
<CircularProgressbarWithChildren  value={secondsObj.seconds}  minValue='0' maxValue='60' strokeWidth='7' 
styles={buildStyles({
pathColor: 'rgb(30, 101, 255)'

})}


>

  <div style={{ fontSize: 25    , marginTop: 5 }}>
  
Minutes : { minutes > 9  ? `${minutes} ` : `${stringMin}${minutes}  `   } Seconds : {secondsObj.seconds > 9 ? secondsObj.seconds : `${stringMin}${secondsObj.seconds}    `   }


  </div>

<div style={{marginTop: 8}}    > 
  <button  onClick={   () => {

if ( !ifwantTostopBoolean  ){

containerSetInterval = setInterval(RunnningFunc , 1000  ) ;

stopTheTimer(true)
startedTimerUpdateState(true);
resetBoolean = true
}

else{

 clearInterval(containerSetInterval)
 stopTheTimer(false)
 startedTimerUpdateState(false);
}


}

}  className='tochngOCfrom'   >   { !isTimerStartedBoolean ? 'Start Timer' : 'Stop Timer'       }     </button>  

{resetBoolean && <button id='tochngOCfrom'  onClick={ () => {
clearInterval(containerSetInterval);
resetBoolean = false;
stopTheTimer(false);
minutes = 0 ;
resetSeconds()
startedTimerUpdateState(false);

}



}  > Reset Timer  </button>  }



</div>

</CircularProgressbarWithChildren>
</div>












</div>


}



export default StopWatch;