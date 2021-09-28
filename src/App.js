import {react} from 'react';
import {useState} from 'react';
import './App.css';

function App() {
  const questionTask=
  [ 
    {
      question:"What is the capital of Pakistan?",
      option:['Karachi','Lahore','Islamabad','Rawalpindi'],
      ans:'Islamabad'
    },
    {
      question:"According to Popluation ________ is the largest province in pakistan",
      option:['Balochistan','KPK','Sindh','Punjab'],
      ans:'Punjab'
    },
    {
      question:"How many constitution of pakistan are?",
      option:['5','2','4','3'],
      ans:'Cascading Style Sheet'
    },
    {
      question:"In which year first constitution of pakistan are established?",
      option:['1956','1947','1973','1967'],
      ans:'1956'
    },
    {
      question:"First Governer General of Pakistan is? ",
      option:['Quaid e Azam','Rana Liaquat','Sikander Mirza','Mohammad Ali Johar'],
      ans:'Quaid e Azam'
    },
    {
      question:"When was the first martial law imposed in Pakistan?",
      option:['Oct 18,1958','Oct 10,1957','May 9,1958','June 10,1971'],
      ans:'Oct 18,1958'
    },
    {
      question:"who is the current army chief of pakistan?",
      option:['Asif Ghafoor','Asim Bajwa','Raheel Sharif','Qamar Javed Bajwa'],
      ans:'Qamar Javed Bajwa'
    },
    ]
    const[currentIndex,setCurrentIndex]=useState(0) //for display question according to index
    const[scoreShow,setScoreShow]=useState(false);
    const [score,setResult]=useState(0) //For scoring
    
    const selectAnswerOption=(questionTask.ans)=>{
      if(questionTask.ans)
      {
        setResult(score+1)
      }
      const aglaQuestion=currentIndex+1;
      if(aglaQuestion<questionTask.length){
        setCurrentIndex(aglaQuestion)
      }
      else{
        setScoreShow(true)
      }
    }
  return (  
    <div className="App"> 
      {scoreShow ?(<div className='score-section'>
					You scored {score} out of {questionTask.length}
				</div>):(<>
      {/* Question Section */}
        <div className='Question_section'>
          <div className='index-count'>
            <span>Question{currentIndex+1}</span>/{questionTask.length}
          </div>
          <div className='question-text'>{questionTask[currentIndex].question}</div>
        </div>
{/* Answer Section */}
        <div className='answer_section'>
              {questionTask[currentIndex].option.map(val=>{
                return<button onClick={()=>selectAnswerOption(questionTask.ans)}>{val}</button>
              })}
        </div>
      </>)}
    </div>
  );
}
export default App;
