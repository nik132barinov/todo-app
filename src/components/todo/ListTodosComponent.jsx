import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'

class ListTodosComponent extends Component {

    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            todos : [],
            message : null
        }
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)   
        this.updateTodoClicked = this.updateTodoClicked.bind(this)   
        this.addTodoClicked = this.addTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveAllTodos(username)
          .then(
              response => {
                  //console.log(response);
                  this.setState({todos : response.data})
              }
          ) 
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        TodoDataService.deleteTodo(username, id)
         .then (
             response => {
                this.setState({message : `Delete of todo ${id} Successful`})
                this.refreshTodos()
             }
         )
        
    }

    addTodoClicked() {
        this.props.history.push(`/todos/-1`)
    }

    updateTodoClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/todos/${id}`)
        // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username);
        // TodoDataService.deleteTodo(username, id)
        //  .then (
        //      response => {
        //         this.setState({message : `Delete of todo ${id} Successful`})
        //         this.refreshTodos()
        //      }
        //  )
        
    }

    render() {
        console.log('render')
        return (
            <div>
                 <h1>List Todos</h1>
                 {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                 <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>IsCompleted?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map (
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                 </div>
            </div>
        )
    }
}

export default ListTodosComponent





// import React, { Component } from "react";
// import TodoDataService from '../../api/todo/TodoDataService.js'
// import AuthenticationService from './AuthenticationService.js'
// import moment from 'moment'

// class ListTodosComponent extends Component {
//     constructor(props) {
//         console.log('constructor')
//         super(props)
//         this.state = {
//             todos: [], 
//             message: null
//                     //Direct api call
//                     // { id: 1, description: 'Learn React', done: false, targetDate: new Date() },
//                     // { id: 2, description: 'Learn Spring Framework', done: true, targetDate: new Date() },
//                     // { id: 3, description: 'Implement Business Logic in my project', done: false, targetDate: new Date() }
                
//         }
//         this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
//         this.updateTodoClicked = this.updateTodoClicked.bind(this);
//         this.refreshTodos = this.refreshTodos.bind(this);
//         this.addTodoClicked = this.addTodoClicked.bind(this)
//     }


//     componentWillUnmount() {
//         console.log('componentWillUnmount')
//     }

//     // When we write react comp we never update directly state
//     // we can here specify either to render props or state

//     // true = show    false = not show
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('shouldComponentUpdate')
//         console.log(nextProps)
//         console.log(nextState)
//         return true;
//     }

//     // When calling an api. Better not to do initial api call directly in the constructor
//     //state will be not initialized until api call completed.
//     componentDidMount() {
//         console.log('componentDidMount')
//         this.refreshTodos();
//         console.log(this.state)

//     }

//     refreshTodos() {
//         let username = AuthenticationService.getLoggedInUserName()
//         TodoDataService.retrieveAllTodos(username)
//         .then(
//             response => {
//                 // console.log(response)
//                 this.setState({todos : response.data})
//             }
//         )
//         // console.log(this.state)

//     }


//     addTodoClicked() {
//             this.props.history.push(`/todos/-1`)
//     }
    

//     updateTodoClicked(id) {
//         console.log('update' + id)
//             this.props.history.push(`/todos/${id}`)

//         // let username = AuthenticationService.getLoggedInUserName()
//         // // console.log(id + " " + username);
//         // TodoDataService.deleteTodo(username, id)
//         //  .then (
//         //      response => {
//         //          this.setState({message : `Delete of todo ${id} Successful`});
//         //          this.refreshTodos();
//         //         }
//         //  )
         
//     }




//     deleteTodoClicked(id) {
//         let username = AuthenticationService.getLoggedInUserName()
//         // console.log(id + " " + username);
//         TodoDataService.deleteTodo(username, id)
//          .then (
//              response => {
//                  this.setState({message : `Delete of todo ${id} Successful`})
//                  this.refreshTodos()
//                 }
//          )
         
//     }

   




//     render() {
//         console.log('render')
//         return (
//             <div>
//                 <h1>List Todos</h1>
//                 {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
//                 <div className="container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Description</th>
//                                 <th>Deadline</th>
//                                 <th>Is Completed?</th>
//                                 <th>Update</th>
//                                 <th>Delete</th>
                                
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                             this.state.todos.map(
//                                     todo =>
//                                         <tr key={todo.id}>
//                                             <td>{todo.description}</td>
//                                             <td>{moment(todo.targetDate).format('DD-MM-YYYY')}</td>
//                                             <td>{todo.done.toString()}</td>
//                                             <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
//                                             <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
//                                         </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                     <div className="row">
//                         <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }

// }

// export default ListTodosComponent