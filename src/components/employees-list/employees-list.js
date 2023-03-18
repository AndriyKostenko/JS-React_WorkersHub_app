import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css';


const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        return (
            <EmployeesListItem key ={item.id} 
                                name={item.name} 
                                salary={item.salary} 
                                increase={item.increase}
                                rise={item.rise}
                                onDelete={() => onDelete(item.id)}
                                onToggleProp={(event) => onToggleProp(item.id, event.currentTarget.getAttribute('data-toggle'))} />
            // <EmployeesListItem {...item}/> - same result
            //received an event for onToggleProp from 'onClick' from 'employees-list-item.' and applied get-attr. to get data from 'data-toggle' 
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
