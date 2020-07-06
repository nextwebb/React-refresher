import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Numbers from './components/numbers'
import styled from 'styled-components'


function  createAlert(){
  alert('hello, you clicked me!')
}

const pStyle = {
  fontSize:'2em',
  color: 'red',
}
const Paragraph = styled.p`
  font-size: 3em
  color: green;
`;

function App() {
    return (
      <div className="App">
        <Numbers></Numbers>
      </div>
    );
 
}

export default App;
