import React, {Component} from 'react';

export default function (WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
}