import { Component } from 'react';

import FormErrors from '../form-errors/form-errors';

import './employees-add-form.css'


class EmployeesAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: '',
            formErrors: {name: '', salary:''},
            nameValid: false,
            salaryValid: false,
            formValid: false
        }
    }

    // event.target takes automatically through DOM
    onValueChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value}, () => {this.validateField(name, value)})   
    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let salaryValid = this.state.salaryValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length >= 2;
                fieldValidationErrors.name = nameValid ? '': ' is too short';
                break;
            case 'salary':
                salaryValid = !isNaN(value) && 
                                typeof(parseInt(value)) === 'number' && 
                                !isNaN(parseInt(value, 10));
                fieldValidationErrors.salary = salaryValid ? '': ' is not a number'
                break;
            default:
                break;
            } 

        this.setState({formErrors: fieldValidationErrors,
                        nameValid: nameValid,
                        salaryValid:salaryValid},
                        this.validateForm)

    }


    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.salaryValid});
      }



    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name:'',
            salary:''})
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
                        <FormErrors formErrors={this.state.formErrors}/>
                    <input type="text"
                            className="form-control new-post-label"
                            placeholder="What's the name?"
                            name="name"
                            value={name}
                            onChange={(event) => this.onValueChange(event)}/>
                    <input type="number"
                            className="form-control new-post-label"
                            placeholder="Wages in $ ?"
                            name="salary"
                            value={salary}
                            onChange={(event) => this.onValueChange(event)}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            disabled={!this.state.formValid}>Add</button>
                            
                    
                </form>
            </div>
        )
    } 

}




export default EmployeesAddForm;