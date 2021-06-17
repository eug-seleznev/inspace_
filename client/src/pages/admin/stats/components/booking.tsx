import style from '../../admin.module.scss'
import getCurrentMonth from '../../getCurrentMonth'


const Booking = () => {
    let money = 5500
    let bookingCount = 22
    return (

           <div className={style.stats__booking} >
               <p className={style.stats__booking__title}>Бронирование</p>
               <div className={style.stats__booking__content}>
                  <div className={style.stats__booking__first_line}>Записей на {getCurrentMonth(Date.now())}</div>
                  <div className={style.stats__booking__count}>{bookingCount}</div>
                  <div className={style.stats__booking__first_line}>Общая сумма</div>
                  <div className={style.stats__booking__count}>{money} р</div>
                </div>
           </div>

    )
}


export default Booking