import axios from 'axios'

export const url = process.env.REACT_APP_IP;




export const setAuthToken = (token: string) => {
    if(token){
        innerBackend.defaults.headers.common['auth-token'] = token;
    } 
}


export const innerBackend = axios.create ({
        baseURL: url,
        headers: {
            accept: 'application/json',        
        }       
    })





