import { useEffect } from "react";
import { Provider } from "inversify-react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
// import PrivatePages from "./components/auth/auth"; //user auth
import Admin from "./pages/admin";
import { RootStore } from "./stores/RootStore";

const App = () => {
  useEffect(()=>{
    let currentDate = Date.now()
    let template = new Date()
    let expireDate = Date.now()+(24-template.getHours())*1000*60*60
    if(!localStorage.getItem('visit')){
      
      localStorage.setItem('visit', expireDate.toString());
      console.log('запись токена')
    }
    if(Number(localStorage.getItem('visit'))<currentDate) {
      
      localStorage.removeItem('visit')
      console.log('удаление токена')
      localStorage.setItem('visit', expireDate.toString())
      console.log('запись токена')
    }
  },[])
  const container = new RootStore().container;

  return (
    <Router>
      {/* <UserStoreProvider> */}
        {/* <PrivatePages> */}
        <Provider container={container}>
          <Switch>
                <Route  path='/admin' component={Admin} />
            </Switch>
        {/* </PrivatePages> */}

        </Provider>
          
      {/* </UserStoreProvider> */}
    </Router>
  );
}

export default App;
