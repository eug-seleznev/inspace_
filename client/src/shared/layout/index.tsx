import Navbar from "./component/Navbar"
import Header from "./component/Header"
import styled  from "styled-components"



const Container = styled.div`
    background-color: ${({theme}) => theme.colors.main};
    width:100%;
    display: flex;

`

const Layout = ({ children, match }: any) => {


    return (
        <>
        <Header />
        <Container>
          <Navbar match={match}/>
            {children}
        </Container>
        </>

    )
    
}


export default Layout