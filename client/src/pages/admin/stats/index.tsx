import style from '../admin.module.scss'
import Visits from './components/visits'
import Booking from './components/booking'
import News from './components/news'
import More from './components/more'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '../../../shared/theme/color'
const Stats = () => {
    const theme = useTheme();
    return (
        <div className={style.stats} >

            <div className={style.stats__first__row}>
                <Visits></Visits>
                <Booking></Booking>
                <More></More>
            </div>
            <News></News>
        </div>

    )

}


export default Stats