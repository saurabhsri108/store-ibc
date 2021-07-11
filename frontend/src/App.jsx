import { Route, Switch, useLocation } from "react-router-dom"
import Header from "./components/Header/Header.component.jsx"
import Home from "./pages/Home.jsx"
import Auth from "./pages/Auth.jsx"
import Products from "./pages/Products.jsx"
import Error404 from "./pages/Error404.jsx"
import Footer from "./components/Footer/Footer.component.jsx"
import SingleProduct from "./pages/SingleProduct.jsx"
import { AnimatePresence } from "framer-motion"

const App = () => {
  const location = useLocation()
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/auth/:option" exact component={Auth} />
          <Route path="/products/" exact component={Products} />
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route path="*" component={Error404} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
