import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CityInputPage from "./pages/CityInputPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <CityInputPage />
          </Route>
          <Route path="/details/:cityName">
            <CityInputPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
