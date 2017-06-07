import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "../containers/Home.jsx";
import Cart from "../containers/Cart.jsx";
import ProductDetails from "../containers/ProductDetails.jsx";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:id" component={ProductDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
