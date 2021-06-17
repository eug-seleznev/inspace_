
import { useInjection } from "inversify-react";
import { Link, Route } from "react-router-dom";
import { UserStore } from "../../stores/user_/UserStore";




const Admin = ({match}: any) => {
    return (
        <div id='layout'>
            <div>
                <Link to={`${match.path}/design`}>design</Link>
                <Link to={`${match.path}`}>admin</Link>
            </div>

            <Route exact path={`${match.path}`}>
                <h2>stat</h2>
            </Route>

                <Route exact path={`${match.path}/design`}>
                    <h3>design </h3>
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