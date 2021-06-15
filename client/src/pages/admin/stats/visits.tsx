import { useEffect, useState } from 'react'
import style from '../admin.module.css'
import getDate from '../getDate'

const Visits = () => {
    let stats = [64,23,51,23,77,89]
    const [schedule, setSchedule] = useState(0)
    useEffect(()=>{
        setSchedule(Math.max(...stats))
        
    },[])
    useEffect(()=>{
        console.log(schedule)
    },[schedule])
    return (

           <div className={style.stats__visits} >
                <p className={style.stats__visits__title}>Посещений сайта</p>
                <div className={style.stats__visits__content}>
                    <div className={style.stats__visits__first_line}>
                        <div>Посещений сегодня</div>
                        <div>{getDate(Date.now())}</div>
                    </div>
                    <div className={style.stats__booking__count}>
                       {schedule}
                    </div>
                    <div className={style.stats__booking__schedule}>
                        {stats.map((el:any,i:number)=>{
                            return (
                                <div key={i} style={{height:el/schedule*100+'%',backgroundColor:'#0074EB',width:'7px',marginRight:'5px'}}>

                                </div>
                            )
                        })}
                    </div>
                </div>
           </div>

    )
}


export default Visits