import React, { Component } from 'react';
import "./Todo.css";

class Todo extends Component {
    constructor(props){
        super(props);
        // add state to check if we are modifiying or not
        this.state = {
            isEditing : false,
            task: this.props.task
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleRemove(){
        this.props.removeTodo(this.props.id)
    }
    toggleForm(){
        this.setState({isEditing : true})
    }
    handleUpdate(e){
        e.preventDefault();
        //take new task data and pass up to parent
        //lets create a update method in todolist called update()
            //now we have access to updateTodo()
        this.props.updateTodo(this.props.id, this.state.task) //need to pass in id and updated task
        this.setState({isEditing : false});
    }
    handleChange(evt){
        this.setState({[evt.target.name] : evt.target.value})
    }
    handleToggle(){
        this.props.toggleTodo(this.props.id)
    }
    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div className="Todo">
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange}/>
                        <button>Save</button>
                    </form>
                </div>
            )
        }else {
            result = (
                <div className="Todo">
                    <li className={this.props.completed ? "Todo-task completed": "Todo-task"} onClick={this.handleToggle}>
                        {this.props.task}
                    </li>
                    <div className="Todo-btns">
                        <button className="" onClick={this.toggleForm}>Edit</button>
                        <button className="Todo-delete-btn" onClick={this.handleRemove}>X</button>
                    </div>
                </div>
            )
        }
        return result;
    }
}

export default Todo;