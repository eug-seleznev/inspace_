import { observer } from "mobx-react";

import style from './auth.module.scss'



const Header = observer(() => {
    return (
        <div className={style.header}>
            <p className={style.header}>inspace v0.1</p>
        </div>
    )
})


export default Header