import style from '../admin.module.scss'
import Visits from './components/visits'
import Booking from './components/booking'
import News from './components/news'
import More from './components/more'
import { useEffect } from 'react'
import { useInjection } from 'inversify-react'
import { UserStore } from '../../../stores/user_/UserStore'
const Stats = () => {
    const store = useInjection(UserStore)
    useEffect(()=>{
        console.log(store.user?._id)
        let currentDate = Date.now()
        let template = new Date()
        let expireDate = Date.now()+(24-template.getHours())*1000*60*60
        if(!localStorage.getItem('visit')){
            store.IncreaseUserCount(store.user?._id)
            localStorage.setItem('visit', expireDate.toString());
            console.log('запись токена')
        }
        if(Number(localStorage.getItem('visit'))<currentDate) {
            store.IncreaseUserCount(store.user?._id)
            localStorage.removeItem('visit')
            console.log('удаление токена')
            localStorage.setItem('visit', expireDate.toString())
            console.log('запись токена')
        }
    },[])
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