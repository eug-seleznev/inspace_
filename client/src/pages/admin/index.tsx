

import Stats from "./stats/index";
import Layout from "../../shared/layout";
import Header from "../auth/Header";
import style from './admin.module.css'
import { Link, Route } from "react-router-dom";




const Admin = ({match}: any) => {

    return (
        <div id='layout' className={style.main}>
            <Header/>
            <Layout/>
            <Route exact path={`${match.path}`}>
                <Stats/>
            </Route>

            <Route exact path={`${match.path}/design`}>
                <h2> test </h2>
            </Route>

            <Route exact path={`${match.path}/booking`}>
                <h2> test</h2>
            </Route>

            <Route exact path={`${match.path}/service`}>
                <h2> test</h2>
            </Route>

            <Route exact path={`${match.path}/events`}>
                <h2> events</h2>
            </Route>

        </div>
    )
}


export default Admin