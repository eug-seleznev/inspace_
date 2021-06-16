import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivatePages from "./components/auth/auth"; //user auth
import Admin from "./pages/admin";

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
