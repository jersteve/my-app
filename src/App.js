import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class='Full-page'>
      <p className='App' style={{fontWeight: 700, fontSize:35, cursor: 'pointer'}} onClick={() => alert('You clicked our title')}>Jerome Steve Sahayadarlin and Ashwath Rashi</p>
      <p className='App'>SWE 432 In Class Assignment - March 31</p>
      <br></br>

      <p style={{paddingLeft: 20}}>This is our first React Project. Try clicking on our title (the one that has our names).</p>
      
    </div>
  );
}


export default App;
