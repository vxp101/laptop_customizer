import React, { Component } from 'react'
import slugify from 'slugify'
import FeatureItem from '../FeatureItem/FeatureItem';
import Options from '../Options/Options';

class Feature extends Component {

    render() {

        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <Options
                        itemHash={itemHash}
                        feature={feature}
                        featureHash={featureHash}
                        item={item}
                        name={slugify(feature)}
                        onChange={e => this.updateFeature(feature, item)}
                        checked={item.name === this.props.selected[feature].name}
                    />
                );
            });

            return (
                <FeatureItem
                    options={options}
                />
            );
        });
        return features
    }
}

export default Feature;
