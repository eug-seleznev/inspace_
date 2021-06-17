
import { Provider } from "inversify-react";
import { Link, Route } from "react-router-dom";
import { RootStore } from "../../stores/RootStore";
// import { TestStore } from "../../stores/RootStore";
import { useUserStore } from "../../stores/user/hooks";
import Render from "../../stores/user/test";





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
                    <Render />
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