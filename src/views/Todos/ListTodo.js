import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss'
import { toast } from 'react-toastify';
import Color from "../HOC/Color";


class ListTodo extends React.Component{
    state={
        ListTodos: [
            {id: 'todo1', title: 'Doing homwork'},
            {id: 'todo2', title: 'Making video'},
            {id: 'todo3', title: 'Fixing bugs'},
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        //let currentListTodo = this.state.ListTodos;
        //currentListTodo.push(todo);
        
        this.setState({
            ListTodos: [...this.state.ListTodos, todo],
            //ListTodos: currentListTodo
        })

        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentListTodos = this.state.ListTodos
        currentListTodos = currentListTodos.filter(item => item.id !== todo.id)
        this.setState({
            ListTodos: currentListTodos
        })
        toast.success("Delete succeed!")

    }

    handleEditTodo = (todo) => {
        let{editTodo, ListTodos} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0

        //save
        if(isEmptyObj === false && editTodo.id === todo.id){

            let listTodosCopy = [...ListTodos]

            let objIndex = listTodosCopy.findIndex((item => item.id == todo.id))

            //log object to console.
            console.log("Before update: ", listTodosCopy[objIndex])

            //Update object's name property
            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                ListTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo succeed!")
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
       
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

   render(){
       let {ListTodos, editTodo} = this.state;
       let isEmptyObj = Object.keys(editTodo).length === 0

       return(
           <>
             <p>
                 Simple TODO Apps with React.js (Công Nghệ Web)
            </p>
            <div className="list-todo-container">
            <AddTodo
                    addNewTodo={this.addNewTodo}
            />
                <div className="list-todo-content">
                    {ListTodo && ListTodos.length > 0 &&
                        ListTodos.map((item, index) => {
                            return(
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                    <span>{index+1} - {item.title}</span> 
                                    :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>
                                                {index + 1} - <input 
                                                onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                value={editTodo.title}/>
                                            </span>
                                            :
                                            <span>
                                                {index + 1} - {item.title}
                                            </span>
                                        }
                                    </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                        'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={()=> this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div> 
                            )
                        })
                    }
                
                </div>
            </div>
           </>
       )
     
   }
}

export default ListTodo;