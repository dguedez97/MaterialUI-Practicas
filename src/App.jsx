import React, { Fragment } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'
import './App.css';

import Navbar from './pages/components/AppbarSimple'
import Views from './pages/index'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Views />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
