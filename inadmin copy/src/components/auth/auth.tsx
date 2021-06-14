import { setAuthToken } from "./helper";
import Auth from '../../pages/auth/index'
import { useMemo } from "react";
import { useUserStore } from "../../stores/user/hooks";
import { observer } from "mobx-react";
const PrivatePages = observer(({children}: any) => {

    const userStore = useUserStore();

    const token: string | null = useMemo(() => {
        return localStorage.getItem('token');
    }, [userStore.isAuth])


        
        if(token) {
            setAuthToken(token);
            return children
        }
        else {
            return <Auth />
        }
        
        
        

          

})


export default PrivatePages

