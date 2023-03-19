import './app-filter.css';



const AppFilter = (props) => {
    const buttonsData = [
        {label: 'All employees'},
        {label: 'For promotion'},
        {label: 'Wages > 1000$'}
    ];

    const buttons = buttonsData.map(({label}) => {
        const active = props.filter === label; // will be true/false
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={label}
                    onClick={() => props.onFilterSelect(label)}>
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



