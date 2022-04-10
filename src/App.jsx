import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Loader from './Components/Loader';
import { CartContextProvider } from './Contexts/CartContext';
import Homepage from './Pages/Homepage';
import NotFound from './Pages/NotFound';
import Products from './Pages/Products';

function App() {
  const lang = '/:lang(en|tr)?';
  return (
    <CartContextProvider>
      <Router>
        <Loader />
        <Header />
        <Cart />
        <Switch>
          <Route exact path={lang} component={Homepage} />
          <Route exact path={`${lang}/products`} component={Products} />
          <Route exact path={`${lang}/*`} component={NotFound} />
        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;
