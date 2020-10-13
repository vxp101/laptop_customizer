import React, { Component } from 'react';
import Feature from './Feature/Feature'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';
import SummaryOption from './SummaryOption/SummaryOption';
import MainSummary from './MainSummary/MainSummary'
import Header from './Header/Header'
// This object will allow us to
// easily convert numbers into US dollar values

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  render() {


    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <SummaryOption
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption}
        />
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {/* {features} */}
            <Feature
              features={this.props.features}
              selected={this.state.selected}

            />
          </form>
          <MainSummary
            total={total}
            summary={summary}
          />
        </main>
      </div>
    );
  }
}

export default App;
