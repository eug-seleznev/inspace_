import React from 'react';
import {useInjection} from 'inversify-react'
import {observer} from 'mobx-react'
import {useMemo} from 'react'
import {Link, NavLink, useLocation, useRouteMatch} from 'react-router-dom'
import styled from 'styled-components'
import {UserStore} from '../../../stores/user_/UserStore'
import {Text} from '../../Text/text'

const Container = styled.div`
  background-color: ${({theme}) => theme.colors.inputs};
  width: 100%;
  height: 52px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const Flex = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`


const Navbar = observer(() => {
    const userStore = useInjection(UserStore)
    let location = useLocation();
    let match = useRouteMatch();
    // const path = useMemo(() => location.pathname.split('/')[2], [location])


    return (
        <Container>
            <Flex>
                <Text>
                    {userStore.user?.email}
                </Text>

                {Links.map((link, index) => {
                    return (
                        <NavLink
                            activeStyle={{color: "red", textDecoration: "none"}}
                            to={`${match.path}/${link.path}`}
                            key={index}
                        >

                                {link.title}
                          

                        </NavLink>
                    )
                })}
            </Flex>
        </Container>
    )
})

export default Navbar


const Links: ILinks[] = [
    {
        title: 'Дешборд',
        path: 'dashboard'
    },
    {
        title: 'Дизайн',
        path: 'design'
    },

    {
        title: 'Бронирование',
        path: 'book'
    },
    {
        title: 'Услуги',
        path: 'service'
    },
    {
        title: 'Мероприятия',
        path: 'events'
    }
]


interface ILinks {
    title: string;
    path: string;
}