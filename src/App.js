import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './Components/Home';
import addConvidado from './Components/AddConvidado';
import mesas from './Components/Mesas';
import telaConvidados from './Components/TelaConvidados';
import confirmarConvidados from './Components/ConfirmarConvidados';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/convidados" component={telaConvidados} />
          <Route exact path="/convidados/adicionar-convidados" component={addConvidado} />
          <Route exact path="/convidados/confirmar-convidados" component={confirmarConvidados} />
          <Route exact path="/mesas" component={mesas} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;