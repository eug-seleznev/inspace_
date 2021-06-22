import axios from "axios";
import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import "reflect-metadata";
import { User } from "../../../../shared/types";
import { innerBackend, setAuthToken, url } from "../../components/auth/helper";
import { LoginData } from "../../interfaces/auth";

@injectable()
export class UserStore {
    @observable user?: User;
    @observable isAuth: boolean;
    @observable isError: boolean;
    
    public constructor(){
        makeObservable(this)
        this.isAuth=false;
        this.isError=false;
    }

    //@POST /users/auth {email:email,password:password} - авторизация
    @action async Login(formData: LoginData){
        try { 
            const res = await axios.post(`${url}/users/auth`, formData)
            const token = res.data.token
            console.log(res.data, 'data')
            localStorage.setItem('token', token)
            setAuthToken(token)
            this.isAuth = true;

        } catch (err) {
            //todo errors on login form
            console.log(err)
            }
    }
    @action async IncreaseUserCount(id:string|undefined){
        try { 
            const res = await axios.get(`${url}/stats/usercount/increase/${id}`)
            console.log(res.data, 'data')
        } catch (err) {
            //todo errors on login form
            console.log(err)
            }
    }
    //get user data
    @action async GetUser(token: string | null) {
        try {
            setAuthToken(token);
            const res = await innerBackend.get(`${url}/users/user/me/get`)
            console.log(res.data)
            this.isAuth = true;
            this.user = res.data;
            return true
      }
         catch (err) {
            if (err) return false
        
        }
      }

}