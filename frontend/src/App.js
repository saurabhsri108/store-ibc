import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./screens/Home"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact children={<Home />} />
      </Switch>
    </Router>
  )
}

export default App
