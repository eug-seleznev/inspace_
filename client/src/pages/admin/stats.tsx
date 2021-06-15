import style from './admin.module.css'
import Visits from './stats/visits'
import Booking from './stats/booking'
import News from './stats/news'
import More from './stats/more'
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