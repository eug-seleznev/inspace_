
import { Link, Route } from "react-router-dom";
import { TestStore } from "../../stores/RootStore";
import { useUserStore } from "../../stores/user/hooks";





const Admin = ({match}: any) => {
    const userStore = useUserStore();
    
    return (
        <div id='layout'>
            <div>
                <Link to={`${match.path}/design`}>design</Link>
                <Link to={`${match.path}`}>admin</Link>
            </div>
            <Route exact path={`${match.path}`}>
                {userStore.user.email}
            </Route>

        
            <Route exact path={`${match.path}/design`}>
                <TestStore />
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