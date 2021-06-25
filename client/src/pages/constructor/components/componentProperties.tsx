import React from 'react';
import { useInjection } from "inversify-react"
import { observer } from "mobx-react"
import { ConstructorStore } from "../../../stores/constructor/constructor"
import '../constructor.sass'

const ComponentProperties = observer(() => {

    const store = useInjection(ConstructorStore)

    // const lol = store.pages
    // lol.map(el=>console.log('lol', el))
    const wow = store.item
    console.log('wow',wow.about)

    return( 
        <div style={{color: "white", padding:'40px'}} >
            component props 
        </div>
    )
})


export default ComponentProperties