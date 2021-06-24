import { Text } from '../../Text/text'
import style from '../layout.module.scss'

const Header = () => {
    return (
        <div className={style.header}>
            <Text className={style.header__text}>inspace v0.1</Text>
        </div>
    )
}


export default Header