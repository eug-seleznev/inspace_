import React from 'react';
import { observer } from "mobx-react"
import '../constructor.sass'
import ListItem from "./listItem"

const PagesList = observer(() => {


    return( 
        <div className='navigator__pageList'>
            <div className='flex-row'>
                <h3>Страницы</h3>
                <img src={require('../../../images/plus.png')}/>
            </div>
            <ListItem />
            <ListItem />
            <ListItem />
        </div>
    )
})


export default PagesList