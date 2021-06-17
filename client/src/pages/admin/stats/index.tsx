import style from '../admin.module.css'
import Visits from './visits'
import Booking from './booking'
import News from './news'
import More from './more'
const Stats = () => {

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