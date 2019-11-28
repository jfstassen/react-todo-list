import React, { Component } from "react";
import uuid from "uuid/v4";
import "./NewTodoForm.css";

export class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        // call some method that has been passed down that will actually create the todo
        // so we need to go back to the TodoList and add a method called create()

        //now call the method inside handlesubmit and pass in this.state (its an object)
        this.props.createTodo({ ...this.state, id: uuid(), completed: false }); //on injecte uuid en creant un nouvel object
        //now clear this.state
        this.setState({ task: "" });
    }
    render() {
        return (
          
                <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Todo</label>
                    <input
                        placeholder="New Todo"
                        id="task"
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Add Todo</button>
                </form>
            
        );
    }
}

export default NewTodoForm;
