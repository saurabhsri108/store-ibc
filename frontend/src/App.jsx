import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header/Header.component";
import Home from "./pages/Home";
import { userLogout } from "./redux/action-creators/user-action-creator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Suspense, lazy } from "react";
const Auth = lazy(() => import("./pages/Auth"));
const Products = lazy(() => import("./pages/Products"));
const Error404 = lazy(() => import("./pages/Error404"));
const Footer = lazy(() => import("./components/Footer/Footer.component"));
const SingleProduct = lazy(() => import("./pages/SingleProduct"));
const Cart = lazy(() => import("./pages/Cart"));
const Account = lazy(() => import("./pages/Account"));
const PaymentOrder = lazy(() =>
  import("./components/AuthComponents/Shipping/PaymentOption.component")
);

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
    <Suspense fallback={<div />}>
      <Header />
      <AnimatePresence exitBeforeEnter>
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
      </AnimatePresence>
      <Footer />
    </Suspense>
  );
};

export default App;
