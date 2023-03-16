import {  useState } from 'react';
import './App.css';
import { quesitonlist } from './Components/Question';
function App() {

  const [currentvalue, setValue] = useState(0)
  const[currentscore,setscore] = useState(0)
  const[showscore,newscore]= useState(false)



  const answercheck=(answer,e)=>{
    if(answer){
      setscore(currentvalue+1)
      e.target.style.backgroundColor="green"
    }
    else{
      e.target.style.backgroundColor="red"
    }
    const nextvalue = currentvalue + 1
    if(nextvalue<quesitonlist.length){
      setValue(nextvalue)
    }
    else{
      newscore(true)
    }
  }
  return (
    <div className="App">
      <div className='headings'>
      <h1>Geekster Quiz</h1>
      <h1>Current Score:{currentscore}</h1>
      </div>
      {showscore === true ? (
        <>
        <div className='maincontiner'>
          <h1 style={{textAlign:"center"}}>You Scored {currentscore} out of {quesitonlist.length}</h1>
        </div>
        </>
      ) : (
      <div className='maincontainer'>
        <div className='sabkabaap' >
        <div className='questionnum'>
          <h1>Question {currentvalue+1} out of {quesitonlist.length}</h1>
        </div>
        <div className='allquestion'>
          <h1 style={{color:"blue"}}>{quesitonlist[currentvalue].question}</h1>
          <div className='allanswer'>
            {quesitonlist[currentvalue].optionlist.map((ele)=>{
              return <button onClick={(e) => answercheck(ele.answer,e)}>{ele.option}</button>
            })}
          </div>
        </div>
        </div>
      </div> )}
    </div>
  );
}

export default App;
