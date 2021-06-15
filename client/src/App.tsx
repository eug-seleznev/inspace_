import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivatePages from "./components/auth/auth"; //user auth
import Admin from "./pages/admin";
import { UserStoreProvider } from './stores/user/hooks';

const App = () => {
  return (
    <Router>
      <UserStoreProvider>
        <PrivatePages>
          <Switch>
              <Route  path='/admin' component={Admin} />
          </Switch>
       </PrivatePages>
      </UserStoreProvider>
    </Router>
  );
}

export default App;
