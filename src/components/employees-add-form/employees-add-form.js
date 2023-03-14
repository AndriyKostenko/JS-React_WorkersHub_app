import { Component } from 'react';

import './employees-add-form.css'


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: ''
        }
    }

    // event.target takes automatically through DOM
    onValueChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name:'',
            salary:''
        })
    }

    // adding an event listeners: onSubmit, onChange to fomr and input 
    render() {
        const {name, salary} = this.state;
;
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                            className="form-control new-post-label"
                            placeholder="What's the name?"
                            name="name"
                            value={name}
                            onChange={this.onValueChange}/>
                    <input type="number"
                            className="form-control new-post-label"
                            placeholder="Wages in $ ?"
                            name="salary"
                            value={salary}
                            onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    } 

}

export default EmployeesAddForm;