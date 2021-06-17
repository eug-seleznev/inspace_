import Auth from '../../pages/auth/index'
import { useEffect, useMemo, useState } from "react";
import { useUserStore } from "../../stores/user/hooks";
import { observer } from "mobx-react";



export enum LoadingStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAIL = 'fail',
  NOTHING = 'nothing'
}



const PrivatePages = observer(({children}: any) => {

    const userStore = useUserStore();
    const [auth, setAuth] = useState<LoadingStatus>(userStore.isAuth
        ? LoadingStatus.SUCCESS 
        : LoadingStatus.LOADING
    ) 

    const token: string | null = useMemo(() => {
       return localStorage.getItem('token');
    }, [userStore.isAuth])


    useEffect(() => {
        userStore.Auth(token as string).then(res => {
            if(res) setAuth(LoadingStatus.SUCCESS)
            else  setAuth(LoadingStatus.SUCCESS)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])
        
        
        if(auth === LoadingStatus.SUCCESS) return children
        if(auth === LoadingStatus.LOADING) return  'loading' //todo loading component
        else return <Auth />

    
})

export default PrivatePages





