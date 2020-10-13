import React, { Component } from 'react'

class MainSummary extends Component {

    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return (<section className="main__summary">
            <h2>Your cart</h2>
            {this.props.summary}
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(this.props.total)}
                </div>
            </div>
        </section>)
    }
}

export default MainSummary;
