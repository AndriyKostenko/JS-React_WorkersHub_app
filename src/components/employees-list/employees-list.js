import EmployeesListItem from "../employees-list-item/employees-list-item"

import './employees-list.css';


const EmployeesList = ({data, onDelete, onAdd}) => {

    const elements = data.map(item => {
        return (
            <EmployeesListItem key ={item.id} 
                                name={item.name} 
                                salary={item.salary} 
                                increase={item.increase}
                                onDelete={() => onDelete(item.id)}/>
            // <EmployeesListItem {...item}/> - same result
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
