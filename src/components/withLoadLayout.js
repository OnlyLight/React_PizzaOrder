import React, {Component} from 'react';

export default function (WrappedComponent) {
    return class extends Component {
        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
}