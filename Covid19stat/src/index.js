import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css';
import './Styles/Styles.css';
import * as serviceWorker from './serviceWorker';
import Home from './Route/Home'
import Country from './Route/Country'


   

const home = () => <Home />
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact={true} component={home} />
      <Route path="/world" exact={true} component={home} />
      <Route path="/country"  component={Country} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
