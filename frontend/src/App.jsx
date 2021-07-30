import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.component.jsx";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
import Products from "./pages/Products.jsx";
import Error404 from "./pages/Error404.jsx";
import Footer from "./components/Footer/Footer.component.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Cart from "./pages/Cart.jsx";
import Account from "./pages/Account.jsx";
import PaymentOrder from "./components/AuthComponents/Shipping/PaymentOrder.component.jsx";
import { userLogout } from "./redux/action-creators/user-action-creator.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const userInfoFromStorage = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    if (userInfoFromStorage) {
      const userJwtToken = JSON.parse(localStorage.getItem("userInfo")).token;
      const expDate = JSON.parse(atob(userJwtToken.split(".")[1])).exp;
      if (expDate * 1000 < Date.now()) {
        dispatch(userLogout());
      }
    }
  });

  const location = useLocation();
  return (
    <>
      <Header />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/auth/:option/:token?" exact component={Auth} />
        <Route path="/order/:id" exact component={PaymentOrder} />
        <Route path="/products/" exact component={Products} />
        <Route path="/products/:id" exact component={SingleProduct} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/user/:id?" component={Account} />
        <Route path="*" component={Error404} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
