import React from 'react';
import {useEffect} from "react";
import {Provider, useInjection} from "inversify-react";
import {
    Router,
    Route,
    Switch,
} from "react-router-dom";
import PrivatePages from "./components/auth/auth"; //user auth
import Admin from "./pages/admin";
import {RootStore} from "./stores/RootStore";
import ThemeContext from "./shared/theme/context";
import {ModalsContainer} from "./modals";

const App = () => {
    const rootStore = new RootStore();
    const container = rootStore.container;

    return (
        <Router history={rootStore.historyStore as any}>
            <Provider container={container}>
                <PrivatePages>
                    <ThemeContext>
                        <Switch>
                            <Route path='/admin' component={Admin}/>
                        </Switch>
                    </ThemeContext>
                </PrivatePages>
                <ModalsContainer/>
            </Provider>
        </Router>
    );
}

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
