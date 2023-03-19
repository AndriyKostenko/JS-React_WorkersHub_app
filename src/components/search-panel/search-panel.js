import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }


    onUpdateSearch = (event) => {
        const term = event.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term); // sending 'term' to another method in App.js
    }

    render () {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Find the employee"
                   value={this.state.term}
                   onChange={this.onUpdateSearch}>
            </input>
        )
    }
    
}

export default SearchPanel;