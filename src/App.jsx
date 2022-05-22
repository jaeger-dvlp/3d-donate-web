import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Loader from './Components/Loader';
import Popup from './Components/Popup';
import { MainContextProvider } from './Contexts/MainContext';
import Blog from './Pages/Blog';
import Homepage from './Pages/Homepage';
import NotFound from './Pages/NotFound';
import PostPage from './Pages/PostPage';
import ProductPage from './Pages/ProductPage';
import Products from './Pages/Products';

function App() {
  const lang = '/:lang(en|tr)?';
  return (
    <MainContextProvider>
      <Router>
        <Loader />
        <Header />
        <Cart />
        <Popup />
        <Switch>
          <Route exact path={lang} component={Homepage} />
          <Route exact path={`${lang}/products`} component={Products} />
          <Route exact path={`${lang}/blog`} component={Blog} />
          <Route
            exact
            path={`${lang}/products/:pSlug`}
            component={ProductPage}
          />
          <Route exact path={`${lang}/blog/:postSlug`} component={PostPage} />
          <Route exact path={`${lang}/*`} component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </MainContextProvider>
  );
}

export default App;
