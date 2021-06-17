import { observer } from "mobx-react";
import { useState } from "react"
import {LoginData} from '../../../interfaces/auth'
import { useInjection } from "inversify-react";
import { UserStore } from "../../../stores/user_/UserStore";





const CreateUserForrm = observer(() => {
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: ''
    })
    const store = useInjection(UserStore);

    const onChange = (e: any) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }



    const onSubmit = (e: any) => {
        console.log(formData, 'helllo')
        e.preventDefault();
        //store call
        if(formData){
            store.Login(formData)
        }
    }
   
    return (
        <form onSubmit={onSubmit}>
            <input type='text' name='email' onChange={onChange} />
            <input type='text' name='password' onChange={onChange} />
            <button type="submit"> submit</button>
        </form>
    )
})


export default CreateUserForrm