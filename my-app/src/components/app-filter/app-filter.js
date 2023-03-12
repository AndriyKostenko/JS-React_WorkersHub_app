import './app-filter.css';


const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All employyes
            </button>
            <button 
                className="btn btn-light"
                type="button">
                    For promotion
            </button>
            <button 
                className="btn btn-light"
                type="button">
                    Wages &gt 1000$
            </button>
        </div>
    )
}

export default AppFilter;