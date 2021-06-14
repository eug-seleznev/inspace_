
import { Route } from "react-router-dom";





const Admin = ({match}: any) => {

    return (
        <div id='layout'>
            <p>layout</p>
            <Route exact path={`${match.path}`}>
                <h2> admin dashboard</h2>
            </Route>

        
            <Route exact path={`${match.path}/design`}>
                <h2> test</h2>
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