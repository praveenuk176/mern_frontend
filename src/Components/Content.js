
import '../Css/Content.css'
import { useState } from 'react';

const Content = () => {
    const[word,setWord]=useState('');
    const [count,setCount]=useState(0);
    function capture(){
        setCount(count+1);
    }
    const [word1, setWord1] = useState("____")
 
    function change() {
        const data = prompt('enter the name');
        setWord1(data)
    }
  return (
    
    <div className='container5'>
        <div>   
            <h1 id='he2'>New Updates</h1>
            <p id='p3'>With the new scheme, A player who plays at least 75 per cent of India’s Test matches in its annual cycle treated from October to September will earn a whopping Rs. 45 lakh per match in addition to the Test match-fees of Rs. 15 lakh.The players who feature in the 50-75 per cent games bracket will earn a bonus of Rs. 30 lakh per match. The non-playing members – if selected in the squad – will be paid half the amount.</p>
            <h2 id='he2'>Give You Comments about updates in the Below Box
             </h2>
             <br></br>
             <h3 id='he2'>Comment Box</h3>
            <label id='l1' htmlFor='inputBox' ></label>
            <input type='text' value={word} onChange={(e)=> setWord (e.target.value)}/>
            <p id='he2' onMouseOver={capture}>{word}</p>
            <h1 id='he2'>{count}</h1>
            <br></br>
            <br></br>
            <div className='cont'>
                <button id='l2' onClick={change}>Name  Please</button>
            </div>
            <p id='he2'>Thank you, {word1}.</p>
            
        </div>
    </div>
  )
}

export default Content