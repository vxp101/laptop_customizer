import React, { Component } from 'react'

class Options extends Component {

    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return (

            <div key={this.props.itemHash} className="feature__item" >
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.name}
                    checked={this.props}
                    onChange={this.props.onChange}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.item.name} ({USCurrencyFormat.format(this.props.item.cost)})
              </label>
            </div>
        );
    }
};


export default Options;
