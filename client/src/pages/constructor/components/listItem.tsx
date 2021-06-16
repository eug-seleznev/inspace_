import { observer } from "mobx-react"
import { useState } from "react"
import '../constructor.sass'

const ListItem = observer(() => {

    const [active, setActive] = useState<boolean>(false)

    return( 
        <button 
            onMouseOver={()=>setActive(true)} 
            onMouseOut={()=>setActive(false)} 
            className='list__item__container' 
            style={{backgroundColor: active? '#484848' : 'transparent'}}
            >
                list components
        </button>
    )
})


export default ListItem