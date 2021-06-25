import React from 'react';
import Navbar from "./component/Navbar"
import Header from "./component/Header"
import styled  from "styled-components"



const Container = styled.div`
    background-color: ${({theme}) => theme.colors.main};
    display: flex;
    flex-direction: column;

`

const Layout = ({ children }: any) => {


    return (
        <>
        <Header />
        <Container>
          <Navbar />
            {children}
        </Container>
        </>

    )
    
}


export default Layout