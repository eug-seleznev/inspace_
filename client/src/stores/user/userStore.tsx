import axios from "axios"
import { User } from "../../../../shared/types"
import { innerBackend, setAuthToken, url } from "../../components/auth/helper"
import {LoginData} from '../../interfaces/auth'



  export function userStore() {
    // note the use of this which refers to observable instance of the store
    return {
      user: {
        firstname: '',
        lastname: '',
        fullname: '',
        username: '',
        email: '',
        phone: '',
        password: ''
      } as User,
      isAuth: false,
      isError: false,
      template: {},


      async registerUser(id: string) {

      },

      //@POST /users/auth {email:email,password:password} - авторизация
      async Login(formData: LoginData){
        try { 
          const res = await axios.post(`${url}/users/auth`, formData)
          const token = res.data.token

          localStorage.setItem('token', token)
          setAuthToken(token)
          this.isAuth = true;

        } catch (err) {
            //todo errors on login form
            console.log(err)
        }
      },

      async Auth(token: string) {

      },

      get UserEmail () {
        return <p>{this.user.email}</p>
      },

      async GetTemplate(){
        const res = await innerBackend.get(`/users/template/get`)
        this.template = res.data;
      },

      get GetTemplateData () {
        return this.template as any
      }
      

 
    }
  }
  
  export type TUserStore = ReturnType<typeof userStore>