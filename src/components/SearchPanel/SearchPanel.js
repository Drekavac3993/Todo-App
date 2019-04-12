import React, { Component } from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };

    render() {
        const { term } = this.state;

        return (
            <input type="text"
                   placeholder="Type to search"
                   className="form-control search-input"
                   value={ term }
                   onChange={ this.onSearchChange }
            />
        );
    }
};
