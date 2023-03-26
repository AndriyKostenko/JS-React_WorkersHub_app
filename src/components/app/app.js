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
        ], 
        term: '',
        filter: ''}
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


    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
                return item.name.indexOf(term) > -1;
        })
    }


    filterPost = (items, filter) => {
        switch(filter) {
            case 'For promotion':
                return items.filter(item => item.rise);
            case 'Wages > 1000$':
                return items.filter(item => item.salary > 1000);
            default:
                return items
    }}

    

    onUpdateSearch = (term) => {
        this.setState({term}); // receiving term from another method in search-panel.js
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }


    render() {
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); // now is showing new data if input included

        return (
            <div className="app">
                <AppInfo employees={employees}
                         increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter}
                                onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList data={visibleData}
                                onDelete={this.deleteItem}
                                onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem}/> 
            </div>
        )
    } // data, onDelete, onAdd...will be sent to props to further classes
}


export default App;