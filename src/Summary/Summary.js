import React, { Component } from 'react'
import Total from '../Total/Total'
import SummaryOption from '../SummaryOption/SummaryOption'

class Summary extends Component {

    render() {
        return (<section className="main__summary">
            <h2>Your cart</h2>
            <SummaryOption
                selected={this.props.selected}
            />
            <Total
                total={this.props.total}
            />
        </section>
        )
    }

}

export default Summary
