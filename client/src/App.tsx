import { Provider } from "inversify-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivatePages from "./components/auth/auth"; //user auth
import Admin from "./pages/admin";
import { RootStore } from "./stores/RootStore";
import { TestStore } from "./stores/TestStore";
import { UserStoreProvider } from './stores/user/hooks';
import Render from "./stores/user/test";

const App = () => {
  const container = new RootStore().container;

  return (
    <Router>
      {/* <UserStoreProvider> */}
        {/* <PrivatePages> */}
        <Provider container={container}>
          <Switch>
                <Route  path='/hey' component={Render} />
            </Switch>
        {/* </PrivatePages> */}

        </Provider>
          
      {/* </UserStoreProvider> */}
    </Router>
  );
}

export default App;
