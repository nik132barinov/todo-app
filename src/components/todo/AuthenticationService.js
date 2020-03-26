
import axios from 'axios'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get('http://localhost:8080/basicauth', 
            {headers: {Authorization: this.createBasicAuthToken(username,password)}})
    }

    executeJwtAuthenticationService(username, password) {
        return axios.post('http://localhost:8080/authenticate', { 
            username,
            password
        })
    }

    createBasicAuthToken(username,password) {
        return 'Basic ' +  window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username,password){
        //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        //console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }

    registerSuccessfulLoginForJwt(username,token) {
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token) {
        return 'Bearer ' +  token
    }


    logout() {
        sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }

    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.Authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()


// import axios from 'axios'
// import {API_URL} from '../../Constants.js'

// export const USER_NAME_SESSION_ATTRIBUTE_NAME='authenticatedUser'

// class AuthenticationService {

//     executeBasicAuthenticationService(username, password) {
//         return axios.get(`${API_URL}/basicauth`,
//          {headers: {authorization: this.createBasicAuthToken(username, password)}})
//     }

//     executeJwtAuthenticationService(username, password) {
//         return axios.post(`${API_URL}/authenticate`, {
//             username,
//             password
         
//         })
//     }
    


//     createBasicAuthToken(username, password) {
//     return 'Basic ' + window.btoa(username + ":" + password)
    
// }

// createJWTToken(token) {
//     return `Bearer ` + token

//     // return 'Bearer ' + token
    
// }


//     registerSuccessfulLogin(username, password) {

//         // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password) 
//         // console.log('registerSuccessfulLogin')

//         sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
//         this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
        
//     }

//     registerSuccessfulLoginForJwt(username, token) {
//         sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
//         this.setupAxiosInterceptors(this.createJWTToken(username, token))


//     }

//         logout(){
//             sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
//         }

//         isUserLoggedIn() {
//             let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
//             if(user===null) return false
//             return true
            
//         }

//         getLoggedInUserName() {
//             let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
//             if(user===null) return ''
//             return user
            
//         }

//         setupAxiosInterceptors(token) {
            
//             axios.interceptors.request.use(
//                 (config) => {
//                     if  (this.isUserLoggedIn()) {
//                    config.headers.Authorization =  token
//                     }
//                     return config
//                 }
//             )
//         }
// }

// export default new AuthenticationService()

