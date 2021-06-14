import { observer } from "mobx-react";
import { useState } from "react"
import { useUserStore } from "../../../stores/user/hooks";
import {LoginData} from '../../../interfaces/auth'





const CreateUserForrm = observer(() => {
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: ''
    })
    const store = useUserStore();

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