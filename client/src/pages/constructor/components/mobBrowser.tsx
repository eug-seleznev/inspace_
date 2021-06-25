import React from 'react';
import { observer } from "mobx-react"
import { useState } from "react"
import '../constructor.sass'

const MobBrowser = observer(() => {

    const [scrollbar, setScrollbar] = useState<boolean>(false)

    return( 
        <div className='mob_browser_container'>
            <div className='mob_browser_content'>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>
    )
})


export default MobBrowser