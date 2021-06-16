import { useInjection } from "inversify-react"
import { userStore } from "./userStore"





const Render = () => {
    const store = useInjection(userStore)
    return (
        <div>
            <h2>hello world</h2> 
            {store.user.email}
        </div>
    )
}


export default Render