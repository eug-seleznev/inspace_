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
import ThemeContext from "./shared/theme/context";

const App = () => {






  const container = new RootStore().container;

  return (
    <Router>
        <Provider container={container}>
          <PrivatePages>
            <ThemeContext>
              <Switch>
                  <Route  path='/admin' component={Admin} />
              </Switch>
            </ThemeContext>
         </PrivatePages>
        </Provider>
    </Router>
  );
})

export default App;








  // useEffect(()=>{
  //   let currentDate = Date.now()
  //   let template = new Date()
  //   let expireDate = Date.now()+(24-template.getHours())*1000*60*60
  //   if(!localStorage.getItem('visit')){
      
  //     localStorage.setItem('visit', expireDate.toString());
  //     console.log('запись токена')
  //   }
  //   if(Number(localStorage.getItem('visit'))<currentDate) {
      
  //     localStorage.removeItem('visit')
  //     console.log('удаление токена')
  //     localStorage.setItem('visit', expireDate.toString())
  //     console.log('запись токена')
  //   }
  // },[])
