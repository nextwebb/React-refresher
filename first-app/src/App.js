import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header info="This is my message" myNumber="6" />
      <Header info="This is my message" myNumber="6" />
      <Header info="This is my message" myNumber="4" />
        <p>Main content</p>
      <Footer trademark="page by nextwebb" />
    </div>
  );
}

export default App;
