import { useEffect } from "react";
import { Provider, useInjection } from "inversify-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivatePages from "./components/auth/auth"; //user auth
import Admin from "./pages/admin";
import { RootStore } from "./stores/RootStore";
import { observer } from "mobx-react";
import { UserStore } from "./stores/user_/UserStore";

const App = observer(() => {
  
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
})

export default App;
