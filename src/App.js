import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./services/context";
import InitialSignIn from "./components/InitialSignIn";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/signin" exact component={InitialSignIn} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
