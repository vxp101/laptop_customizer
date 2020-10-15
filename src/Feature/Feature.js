import React, { Component } from 'react'
import slugify from 'slugify'
import FeatureItem from '../FeatureItem/FeatureItem';
import Options from '../Options/Options';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class Feature extends Component {

    render() {

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <Options
                        updateFeature={this.props.updateFeature}
                        itemHash={itemHash}
                        feature={feature}
                        cost={USCurrencyFormat.format(item.cost)}
                        item={item}
                        name={slugify(feature)}
                        checked={item.name === this.props.selected[feature].name}
                    />
                );
            });

            return (
                <FeatureItem
                    options={options}
                    featureHash={featureHash}
                    feature={feature}
                />
            );
        });
        return features
    }
}

export default Feature;
