import { Switch, Route, Redirect } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/search/:modeParam/:queryParam" exact>
        <Search />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
