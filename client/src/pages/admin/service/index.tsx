import { useInjection } from "inversify-react"
import { ServiceStore } from "../../../stores/service/ServiceStore"





const Service = () => {
    const serviceStore = useInjection(ServiceStore)
    return (
        <div>
            <h2>hello world</h2>

        </div>
    )
}

export default Service