import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.component.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer/Footer.component.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact children={<Home />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
