import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Jhon C.', salary: 700, increase: false, rise: true, id: 1},
                {name: 'Bob C.', salary: 800, increase: true, rise: false, id: 2},
                {name: 'Mark C.', salary: 950, increase: true, rise: false, id: 3},
            ]
        }
        this.maxId = 4 // just simply continue generation of dynamic id for 
                       //new users

    }


    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        // setState - asynchronous
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        });
        
    }


    deleteItem = (id) => {
        this.setState(({data}) => {

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }


    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }


    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo employees={employees}
                         increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList data={this.state.data}
                                onDelete={this.deleteItem}
                                onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem}/> 
            </div>
        )
    } // data, onDelete, onAdd...will be sent to props to further classes


    
}

export default App;