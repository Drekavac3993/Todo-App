import React, { Component } from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { onItemAdded } = this.props;
        const { label } = this.state;
        onItemAdded(label);

        this.setState({
            label: ''
        })
    };

    render() {
        return(
            <form className="item-add-form d-flex" onSubmit={ this.onSubmit }>

                <input type="text"
                       className="form-control"
                       onChange={ this.onLabelChange }
                       placeholder="What needs to be done"
                       value={this.state.label}
                />

                <button className="btn btn-outline-secondary btn-add-item">
                    Add Item
                </button>
            </form>
        )
    }
}
