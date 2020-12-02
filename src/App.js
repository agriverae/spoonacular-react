import "./App.css";
import PaginaReceta from "./components/PaginaReceta";
import Inicio from "./components/Inicio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/receta/:id">
          <PaginaReceta />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
