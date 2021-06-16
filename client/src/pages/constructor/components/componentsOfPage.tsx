import { observer } from "mobx-react"
import { useState } from "react"
import '../constructor.sass'
import ListItem from "./listItem"

const ComponentSOfPage = observer(() => {

    const [plusHover, setPlusHover] = useState<boolean>(false)

    return( 
        <div className='navigator__pageList'>
            <h3>Главная страница</h3>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <img 
                onMouseOver={()=>setPlusHover(true)} 
                onMouseOut={()=>setPlusHover(false)} 
                style={{backgroundColor: plusHover?  '#484848' : 'transparent', height:'100%'}} 
                src={'/plus.png'}/>
        </div>
    )
})


export default ComponentSOfPage