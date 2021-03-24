import { Route, Switch } from "react-router-dom";
import './App.css';

// Components
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={Register}/>
        <Route exact path="/signin" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
