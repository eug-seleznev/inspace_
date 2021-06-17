import { useInjection } from "inversify-react"
import { observable } from "mobx"
import { observer } from "mobx-react"
import { TestStore } from "../TestStore"
import { userStore } from "./userStore"




const Render = observer(() => {
    const store = useInjection(TestStore)
    return (
        <div>
            <h2>hello world</h2> 
           <p>{store.testValue}</p> 
           <button onClick={() => store.ChangeValue()}>change</button>
        </div>
    )
})


export default Render