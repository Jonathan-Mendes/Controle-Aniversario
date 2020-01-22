import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './Components/Home';
import convidados from './Components/Convidados';
import mesas from './Components/Mesas';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/convidados" component={convidados} />
          <Route exact path="/mesas" component={mesas} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;