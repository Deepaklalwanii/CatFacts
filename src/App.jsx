import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Textpopup from './Textpopup';


function App() {
    const [catFact, setCatFact] = useState('');  
    
    const fetchCatFact = () =>{
        axios.get('https://catfact.ninja/fact').then(response => {
            setCatFact(response.data.fact);
        });
    }

    useEffect(() => {
        fetchCatFact()
    }, []);

    return(
<div className="App">
  <>
    <p id='dataContainer'>{catFact}</p>
    <button className='btn' onClick={fetchCatFact}> <i class="fa fa-paw"></i></button>
    <div  className='popup-hint'>
    <Textpopup />
    </div>
  </>
</div>

    );
}

 
export default App;