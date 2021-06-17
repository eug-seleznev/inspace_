import { Provider } from "inversify-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivatePages from "./components/auth/auth"; //user auth
import Admin from "./pages/admin";
import { RootStore } from "./stores/RootStore";

const App = () => {
  const container = new RootStore().container;

  return (
    <Router>
        <Provider container={container}>
          <PrivatePages>
            <Switch>
                <Route  path='/admin' component={Admin} />
            </Switch>
         </PrivatePages>
        </Provider>
    </Router>
  );
}

export default App;
