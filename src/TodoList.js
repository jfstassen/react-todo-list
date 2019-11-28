import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }
    // create() is gonna take a new todo object and add it in to the todo in state.
    create(newTodo) {
        //todos == array that take all existing this.state.todos and add in todo
        this.setState({
            todos: [...this.state.todos, newTodo]
            //then pass down that method to our form via props
        });
    }
    remove(id) {
        this.setState({
            //returns a new array without the id passed in
            todos: this.state.todos.filter(foreachtodo => foreachtodo.id !== id)
            //now we need to bind and pass it down to the individual comp. : todo
        });
    }
    update(id, updatedTask){
        // what are we updating? so we use an id to find a item, then what is the new task ? 
        // so we call that udpatedTask so we need to call setstate and make a new array containing 
        // all of the old todos unchaanged + we wanna take the todo that has this *id*
        // and change its task to whatever was passed in updatedTask
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return {...todo, task: updatedTask}; //if we dont write ...todo we would lose
                                                    // the id
            }
            return todo; //otherwise return the todo unchanged
        });
        this.setState({todos : updatedTodos})
    }
    toggleCompletion(id){ //copy pasta from update function
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        this.setState({todos : updatedTodos})
    }
    render() {
        return (
            <div className="TodoList">
                <h1>React Todo List !<span>A simple React todo List App.</span></h1>
                <ul>
                    {this.state.todos.map(todo => (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                task={todo.task}
                                removeTodo={this.remove}
                                updateTodo={this.update}
                                completed={todo.completed}
                                toggleTodo={this.toggleCompletion}
                            />
                    ))}
                </ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        );
    }
}

export default TodoList;
