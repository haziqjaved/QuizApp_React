import {useState} from 'react';
import questionTask from './component/Question';
import './App.css';

function App() {
    const[currentIndex,setCurrentIndex]=useState(0) //for display question according to index
    const[scoreShow,setScoreShow]=useState(false);
    const [score,setResult]=useState(0) //For scoring
    
    const selectAnswerOption=(i)=>{
      const aglaQuestion=currentIndex+1;
      if(aglaQuestion<questionTask.length){
        setCurrentIndex(aglaQuestion)
        console.log('ans===>',questionTask[currentIndex].ans)
        console.log('clicked answer===>',questionTask[currentIndex].option[i])
        if(questionTask[currentIndex].option[i] === questionTask[currentIndex].ans){
          setResult(score+1)
        }
        else{
          console.log('you entered incorrect answer')
        }
      }
      else{
        setScoreShow(true)
      }
    }
  return (  
    <div className="App"> 
      <div className="app">
      {scoreShow ?(<div className='score-section'>
				<p>	You scored {score} out of {questionTask.length}</p>
          <img src='https://cdn2.iconfinder.com/data/icons/medicine-3-1/512/quality_seal-512.png'  alt='award_seal'/>
          {/* <button onClick={()=>setCurrentIndex(0)}>Start Again</button> */}
				</div>):(<>
      {/* Question Section */}
        <div className='Question_section'>
          <div className='index-count'>
            <span className='length'>Question{currentIndex+1}</span> Out of {questionTask.length}
          </div>
          <div className='question-text'>{questionTask[currentIndex].question}</div>
        </div>
{/* Answer Section */}
        <div className='answer_section'>
              {questionTask[currentIndex].option.map((val,index)=>{
                return<button onClick={()=>selectAnswerOption(index)}>{val}</button>
              })}
        </div>
      </>)}
      </div>
    </div>
  );
}

export default App;
