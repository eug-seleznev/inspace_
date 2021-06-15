import style from '../admin.module.css'
import getDate from '../getDate'

const Visits = () => {

    return (

           <div className={style.stats__visits} >
                <p className={style.stats__visits__title}>Посещений сайта</p>
                <div className={style.stats__visits__content}>
                    <div className={style.stats__visits__first_line}>
                        <div>Посещений сегодня</div>
                        <div>{getDate(Date.now())}</div>
                    </div>
                    <div className={style.stats__booking__count}>
                       24
                    </div>
                </div>
           </div>

    )
}


export default Visits