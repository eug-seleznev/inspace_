import { statSync } from 'fs'
import { useInjection } from 'inversify-react'
import { observer } from 'mobx-react'
import { useEffect, useState } from 'react'
import getDate from '../../../../shared/date/getDate'
import { userStore } from '../../../../stores/user/userStore'
import { UserStore } from '../../../../stores/user_/UserStore'
// import { userStore } from '../../../stores/user/userStore'

import style from '../../admin.module.scss'


const Visits = observer(() => {
    
    const store = useInjection(UserStore)
    const [schedule, setSchedule] = useState<number>(0)
    const [stats, setStats] = useState<number[]>([])
    const [visibleStat, setVisibleStat] = useState<number>()
    useEffect(()=>{
        store.user?.stats?.map(stat => 
            {   
                let vis:number = stat.visits?stat.visits:0
                setStats(stats=>[...stats,vis])
            }
        )
    },[])
    useEffect(()=>{
        setSchedule(Math.max(...stats))
    },[stats])
    // useEffect(()=>{
    //     console.log(schedule)
    // },[schedule])
    return (

           <div className={style.stats__visits} 
        //    onMouseLeave={()=>{setVisibleStat(-1)}} 
           >
                <p className={style.stats__visits__title}>Посещений сайта</p>
                <div className={style.stats__visits__content}>
                    <div className={style.stats__visits__first_line}>
                        <div>Посещений сегодня</div>
                        <div>{getDate(Date.now())}</div>
                    </div>
                    <div className={style.stats__booking__count}>
                       {stats[stats.length - 1]}
                    </div>
                    <div className={style.stats__booking__schedule}>
                        {store.user?.stats.map((el:any,i:number)=>{
                            // console.log(el)
                            return (
                                <div key={i} 
                                    onClick={()=>{setVisibleStat(i)}} 
                                    className={style.stats__visits__graph} 
                                    style={{height:el.visits/schedule*100+'%'}}>
                                    {/* <p style={{position:'absolute',left:'30px'}}>{getDate(el.date)} : {el.visits} посещений</p> */}
                                </div>
                            )
                        })}
                    </div>
                    <div style={{position:'relative',marginTop:'-16px',marginLeft:'-21px'}}>
                        {store.user?.stats.map((el:any,i:number)=>{
                            return (
                                    <p key={i} style={{display:visibleStat===i?'block':'none', position:'absolute',left:'30px'}}>{getDate(el.date)} : {el.visits}</p>

                            )
                        })}
                    </div>
                </div>
           </div>

    )
})


export default Visits