import React, {Component} from 'react';

import ProductItemProvider from "../contexts/ProductItemProvider";
import withLoadLayout from "./withLoadLayout";
import { Layout } from "./Layout";

const ActiceWithLoadLayout = withLoadLayout(Layout);

class ResultComponent extends Component {
    render() {
        return (
            <ProductItemProvider>
                <ActiceWithLoadLayout />
            </ProductItemProvider>
        );
    }
}

export default ResultComponent;