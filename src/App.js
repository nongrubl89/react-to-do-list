import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./services/context";
import InitialSignIn from "./components/InitialSignIn";
import { ModalProvider } from "./services/modalcontext";

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/signin" exact component={InitialSignIn} />
          </Switch>
        </Router>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
