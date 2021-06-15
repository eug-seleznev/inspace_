import style from '../admin.module.css'


const News = () => {
    const news = [{date:'22 апреля',
    text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni ea commodo consequat.',
    title:'Запуск версии 0.1'}]
    return (
        <div className={style.stats__news}>
            <p className={style.stats__news__title}>Новости проекта</p>
            <div className={style.stats__news__content}>
                {news.map((el:any,i:number)=>{
                    return(
                        <div key={i} style={{padding:'10px'}}>
                            <div className={style.stats__news__date}>{el.date}</div>
                            <div className={style.stats__news__one_title}>{el.title}</div>
                            <div className={style.stats__news__text}>{el.text}</div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}


export default News