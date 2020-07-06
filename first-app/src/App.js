import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'

function  createAlert(){
  alert('hello, you clicked me!')
}

function App() {
  return (
    <div className="App">
      <Header info="This is my message" myNumber="6" />
      <Header info="This is my message" myNumber="6" />
      <Header info="This is my message" myNumber="4" />
        <p>Main content</p>
      <Footer trademark="page by nextwebb" myalert={createAlert} />
    </div>
  );
}

export default App;
