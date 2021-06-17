import { useState } from "react"
import { Link } from "react-router-dom"
import style from '../../pages/admin/admin.module.css'
const Layout = () => {
    const [outline, setOutline] = useState('')
    const picked = {
        backgroundColor:'#484848'
    }
    const unpicked = {
        backgroundColor:'rgba(0,0,0,0)'
    }
    return (
        <div className={style.layout}  >
            <div className={style.links}  >
                <Link to='./' className={style.link} onClick={()=>{setOutline('main')}} style={outline==='main'?picked:unpicked}>Главная</Link>
                <Link to='../../admin/design' className={style.link} onClick={()=>{setOutline('design')}} style={outline==='design'?picked:unpicked}>Дизайн</Link>
                <Link to='../../admin/booking' className={style.link} onClick={()=>{setOutline('booking')}} style={outline==='booking'?picked:unpicked}>Бронирование</Link>
                <Link to='../../admin/service' className={style.link} onClick={()=>{setOutline('service')}} style={outline==='service'?picked:unpicked}>Услуги</Link>
                <Link to='../../admin/events' className={style.link} onClick={()=>{setOutline('events')}} style={outline==='events'?picked:unpicked}>Мероприятия</Link>
            </div>
            
        </div>
    )
    
}


export default Layout