
import Constructor from "../constructor";
import Dashboard from "./dashboard/index";
import Layout from "../../shared/layout";
import Header from "../../shared/layout/component/Header";
import style from './admin.module.scss'
import { Route } from "react-router-dom";
import Service from "./service";




const Admin = ({match}: any) => {

    
    return (           
            <Layout>
            <Route exact path={`${match.path}/dashboard`} component={Dashboard}/>
            <Route exact path={`${match.path}/design`} component={Constructor} />
            <Route exact path={`${match.path}/book`}>
                <h2> test</h2>
            </Route>
            <Route exact path={`${match.path}/service`} component={Service} />
            <Route exact path={`${match.path}/events`}>
                <h2> events</h2>
            </Route>

        </Layout>
    )
}


export default Admin