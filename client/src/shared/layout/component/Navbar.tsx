import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Text } from '../../Text/text'
import style from '../layout.module.scss'

const Container = styled.div`
    background-color: ${({theme}) => theme.colors.inputs};
    width:100%;
    height: 62px;
    display: flex;
    align-items: center;
`




const Navbar = ({match}: any) => {
    return (
        <Container >
            <div className={style.links}  >
               {Links.map(link => {
                   return <Link to={`${match.path}/${link.path}`}>{link.title}</Link>
               })}
            </div>
        </Container>
    )
}

export default Navbar



const Links: ILinks[] =[
    {
        title: 'Дешборд',
        path: '/'
    },
    {
        title: 'Дизайн',
        path: '/design'
    },
    
    {
        title: 'Бронирование',
        path: '/book'
    },
    {
        title: 'Услуги',
        path: '/service'
    },
    {
        title: 'Мероприятия',
        path: '/events'
    }
]








interface ILinks {
    title: string;
    path: string;
}