import './app-filter.css';



const AppFilter = (props) => {
    const buttonsData = [
        {name: 'All employees', label: 'All employees'},
        {name: 'For promotion', label: 'For promotion'},
        {name: 'Wages > 1000$', label: 'Wages > 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name; // will be true/false
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;



