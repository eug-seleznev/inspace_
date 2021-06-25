import React from 'react';

import UserCard from "./card"
import CreateUserForrm from "./create/form"

import Header from "../../shared/layout/component/Header"


const Auth = () => {

    return (
        <>
            <Header />
            <UserCard />
            <CreateUserForrm />
        </>
    )
}

export default Auth