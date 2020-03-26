import axios from 'axios'
import { API_URL, JPA_API_URL } from '../../Constants.js'

class TodoDataService {
    retrieveAllTodos(name) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/todos`);
    }

    retrieveTodo(name, id) {
        //console.log('executed service')
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        //console.log('executed service')
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo) {
        //console.log('executed service')
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo) {
        //console.log('executed service')
        return axios.post(`${JPA_API_URL}/users/${name}/todos/`, todo);
    }

}

export default new TodoDataService()


// import Axios from "axios"
// import {API_URL} from '../../Constants.js'

// class TodoDataService {
//     retrieveAllTodos(name) {
//     //axios framework to call backend
//     return Axios.get(`${API_URL}/users/${name}/todos`);
//     // console.log('executed service')
//   }

//   retrieveTodo(name, id) {
//     return Axios.get(`${API_URL}/users/${name}/todos/${id}`);
//   }

//   deleteTodo(name, id) {
//     return Axios.delete(`${API_URL}/users/${name}/todos/${id}`);
//   }

//   updateTodo(name, id, todo) {
//     return Axios.put(`${API_URL}/users/${name}/todos/${id}`, todo);
//   }

//   createTodo(name, todo) {
//     return Axios.post(`${API_URL}/users/${name}/todos/`, todo);
//   }

// }

// export default new TodoDataService()