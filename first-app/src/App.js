import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
        <p>Main content</p>
      <Footer />
    </div>
  );
}

export default App;
