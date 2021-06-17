import { useInjection } from 'inversify-react'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import getDate from '../../../../shared/date/getDate'
import { TestStore } from '../../../../stores/TestStore'
// import { userStore } from '../../../stores/user/userStore'

import style from '../../admin.module.scss'


const Visits = observer(() => {
    let stats = [64,23,51,23,77,89]
    const store = useInjection(TestStore)
    const [schedule, setSchedule] = useState<number>(0)
    useEffect(()=>{
        setSchedule(Math.max(...stats))
        
    },[])
    // useEffect(()=>{
        // console.log(store.user.stats)
    // },[])
    // useEffect(()=>{
    //     console.log(schedule)
    // },[schedule])
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
                        {/* {store.user.stats.map((el:any,i:number)=>{
                            console.log(el)
                            return (
                                <div key={i} className={style.stats__visits__graph} style={{height:el/schedule*100+'%',backgroundColor:'#0074EB',width:'7px',marginRight:'5px'}}>
             
                                </div>
                            )
                        })} */}
                    </div>
                </div>
           </div>

    )
})


export default Visits