// import {react} from 'react';
// import {useState} from 'react';
// import './App.css';

// function App() {
//   const[currentIndex,setCurrentIndex]=useState(0)
//   const questionTask=
//   [ 
//     {question:"Q1:  What is the capital of Pakistan?",
//     option:['Karachi','Lahore','Islamabad','Rawalpindi'],
//     ans:'Islamabad'},
//     {question:"Q2: According to Popluation ________ is the largest province in pakistan"
//     ,option:['Balochistan','KPK','Sindh','Punjab'],
//     ans:'Punjab'},
//     {question:"Q3: How many constitution of pakistan are?",
//     option:['5','2','4','3'],
//     ans:'Cascading Style Sheet'},
//     {question:"Q4: In which year first constitution of pakistan are established?",
//     option:['1956','1947','1973','1967'],
//     ans:'1956'},
//     {question:"Q5:First Governer General of Pakistan is? ",
//     option:['Quaid e Azam','Rana Liaquat','Sikander Mirza','Mohammad Ali Johar'],
//     ans:'Quaid e Azam'},
//     {question:"Q6: When was the first martial law imposed in Pakistan?",
//     option:['Oct 18,1958','Oct 10,1957','May 9,1958','June 10,1971'],
//     ans:'Oct 18,1958'},
//     {question:"Q7: who is the current army chief of pakistan?",
//     option:['Asif Ghafoor','Asim Bajwa','Raheel Sharif','Qamar Javed Bajwa'],
//     ans:'Qamar Javed Bajwa'},
//     ]
//     const next=()=>{
//        setCurrentIndex(currentIndex+1)
//       }
//   return (
//     <div className="App">
//         <div className='DisplayQuiz'>
//         {currentIndex<questionTask.length?
//         <>
//        { 
//         questionTask[currentIndex].question}
//         {questionTask[currentIndex].option.map(value=>
//        {
//          return <div><input  type='radio'/>
//          {value} </div>   
//        })
//        }
          
//        <br/><br/> 
//         <button onClick={next}>Next</button></>
//         :
//         <><p>Quiz is Ended</p>
//         <button onClick={()=>setCurrentIndex(0)}>Start Again</button>
//         </>
//          }
//         <br/>
//         </div>

      
        
//     </div>
//   );
// }
// export default App;
