import { observer } from "mobx-react";
import { useUserStore } from "../../stores/user/hooks";
import style from './auth.module.css'



const Header = observer(() => {
    return (
        <div className={style.header}>
            <p className={style.header}>inspace v0.1</p>
        </div>
    )
})


export default Header