import React, { Component } from 'react'

class Options extends Component {

    render() {

        return (

            <div key={this.props.itemHash} className="feature__item" >
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.name}
                    checked={this.props.checked}
                    onChange={e => this.props.updateFeature(this.props.feature, this.props.item)}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.item.name} ({this.props.cost})
              </label>
            </div>
        );
    }
};


export default Options;
