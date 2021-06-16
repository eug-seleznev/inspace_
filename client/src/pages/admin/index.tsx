
import Constructor from "../constructor";
import { Link, Route } from "react-router-dom";
import { useUserStore } from "../../stores/user/hooks";





const Admin = ({match}: any) => {
    const userStore = useUserStore();
    
    return (
        <div id='layout' style={{height:'100%'}}>
            <div>
                <Link to={`${match.path}/design`}>design</Link>
                <Link to={`${match.path}`}>admin</Link>
            </div>
            <Route exact path={`${match.path}`}>
                {userStore.UserEmail}
            </Route>

        
            <Route exact path={`${match.path}/design`}>
                <Constructor />
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