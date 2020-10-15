import React, { Component } from 'react'
import MainSummary from '../MainSummary/MainSummary'
import SummaryOption from '../SummaryOption/SummaryOption'

class Summary extends Component {

    render() {
        return (<section className="main__summary">
            <h2>Your cart</h2>
            <SummaryOption
                selected={this.props.selected}
            />
            <MainSummary
                total={this.props.total}
            />
        </section>
        )
    }

}

export default Summary
