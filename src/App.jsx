import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Loader from './Components/Loader';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Router>
      <Loader />
      <Header />
      <Cart />
      <Switch>
        <Route path={['/tr', '/en', '/']}>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
