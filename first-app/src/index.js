import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/header'
import Footer from './components/footer'
import * as serviceWorker from './serviceWorker';
import { Route,BrowserRouter} from 'react-router-dom'

const routing = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/header" component={Header}></Route>
      <Route path="/footer" component={Footer}></Route>
    </div>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
