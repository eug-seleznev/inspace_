import { useInjection } from "inversify-react"
import { observer } from "mobx-react"
import { TestStore } from "../TestStore"




const Render = observer(() => {
    const testStore = useInjection(TestStore)

    return (
        <div>
            <h2>hello world</h2> 
           <p>{testStore.testValue}</p> 
           <button onClick={() => testStore.ChangeValue()}>change</button>
        </div>
    )
})


export default Render