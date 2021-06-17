import axios from "axios";
import { injectable } from "inversify";
import { action, makeObservable, observable } from "mobx";
import "reflect-metadata";
import { Services } from "../../../../shared/types";
import { innerBackend, setAuthToken, url } from "../../components/auth/helper";
import { LoginData } from "../../interfaces/auth";

@injectable()
export class ServiceStore {
    @observable service?: Services[];
    @observable isError: boolean;
    
    public constructor(){
        makeObservable(this)
        this.isError=false;
    }

    //@POST /blocks/add/services - авторизация
    @action async Create(formData: Services){
        try { 
            const res = await axios.post(`${url}/users/auth`, formData)
            console.log(res.data, 'hello')
            this.service = res.data

        } catch (err) {
            //todo errors
            console.log(err)
            }
    }
 
}