import Auth from '../../pages/auth/index'
import { useEffect, useMemo, useState } from "react";
import { observer } from "mobx-react";
import { useInjection } from 'inversify-react';
import { UserStore } from '../../stores/user_/UserStore';



export enum LoadingStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAIL = 'fail',
  NOTHING = 'nothing'
}



const PrivatePages = observer(({children}: any) => {

    const userStore = useInjection(UserStore);
    const [auth, setAuth] = useState<LoadingStatus>(userStore.isAuth
        ? LoadingStatus.SUCCESS 
        : LoadingStatus.LOADING
    ) 

    const token: string | null = useMemo(() => {
       return localStorage.getItem('token');
    }, [userStore.isAuth])


    useEffect(() => {
        if(token || userStore.isAuth){
            userStore.GetUser(token as string).then(res => {
            if(res) setAuth(LoadingStatus.SUCCESS)
            else  setAuth(LoadingStatus.FAIL)
         })
        } else setAuth(LoadingStatus.FAIL)
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])
        
        
        if(auth === LoadingStatus.SUCCESS) return children
        if(auth === LoadingStatus.LOADING) return  'loading' //todo loading component
        else return children

    
})

export default PrivatePages





