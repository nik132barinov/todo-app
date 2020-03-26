import axios from 'axios'

class HelloWorldService {
    
    executeHelloWorldService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world');        
    }

    executeHelloWorldBeanService() {
        //console.log('executed service')
        return axios.get('http://localhost:8080/hello-world-bean');        
    }

    executeHelloWorldPathVariableService(name) {
        //console.log('executed service')
        // let username = 'in28minutes'
        // let password = 'dummy'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        // , 
        //     {
        //         headers : {
        //             authorization: basicAuthHeader
        //         }
        //     }
        );        
    }

}

export default new HelloWorldService()


// import Axios from "axios"

// class HelloWorldService {


//   //fetch
//   executeHelloWorldService() {
//     //axios framework to call backend
//     return Axios.get('http://localhost:8080/hello-world');
//     // console.log('executed service')
//   }

//   executeHelloWorldBeanService() {
//     return Axios.get('http://localhost:8080/hello-world-bean');
//     // console.log('executed service')
//   }

//   executeHelloWorldPathVariableService(name) {

//     //use TICK not QUOTES becuase tick replaces values 
//     //so that name value we specified above
//     // gets passed to the name called from http
//     // let username = 'nik132barinov'
//     // let password = '080808'

//     // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

//     return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
//     // ,
//     //   {
//     //     headers : {
//     //       authorization: basicAuthHeader
//     //     }
//     //   }
//     );
//     // console.log('executed service')

//   }
// }

// export default new HelloWorldService()