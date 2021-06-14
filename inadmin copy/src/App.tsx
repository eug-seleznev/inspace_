import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivatePages from "./components/auth/auth"; //user auth
import Admin from "./pages/admin";

const App = () => {
  return (
    <Router>
      <PrivatePages>
        <Switch>
            <Route  path='/admin' component={Admin} />
        </Switch>
       </PrivatePages>
     
    </Router>
  );
}

export default App;
