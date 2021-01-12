import './App.css';
import {useState } from "react";
//import { CircularProgressbar , buildStyles , CircularProgressbarWithChildren  } from 'react-circular-progressbar';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import  StopWatch from './components/Pages/StopWatch';

// function consoling(){
//   console.log(new Date())
// }


function App() {


  

let [secondsObj , startSeconds] = useState(  { 
  seconds : 0  , 
  rounds : 0 
 }    );

 let [isTimerStarted , startedTimerUpdate] = useState(false);
 let [ifwantTostop , stopTheTimer  ] = useState(false)


function startStopWatch () {

startSeconds( previousSec => previousSec.seconds === 60 ?  {...previousSec , seconds : 0}    : 
  {...previousSec , seconds : previousSec.seconds + 1} )

}
function resetSeconds() {
  startSeconds( previousSec => {
return { ...previousSec , seconds : 0   }

  }         )
}





  return (
    <div className="App">
      <Header></Header>

<StopWatch RunnningFunc={startStopWatch} startedTimerUpdateState={startedTimerUpdate} stopTheTimer={stopTheTimer} 
  secondsObj={secondsObj}  
  isTimerStartedBoolean={isTimerStarted}
  ifwantTostopBoolean={ifwantTostop}
   resetSeconds={resetSeconds}

>             


    </StopWatch> 



      <Footer></Footer>
    </div>
  );
}

export default App;
