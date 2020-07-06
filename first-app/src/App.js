import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
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
        <Header info="This is my message" myNumber="6" />
        <p style={pStyle}>Main content</p>
        <Paragraph>New styled</Paragraph>
        <Footer trademark="page by nextwebb" myalert={createAlert} />
      </div>
    );
 
}

export default App;
