import React, {Component} from 'react';
import './App.css';

import Layout from "./components/Layout";
import { ProductItemProvider } from './contexts/ProductItemContext'
import withLoadLayout from "./components/withLoadLayout";

const ActiceWithLoadLayout = withLoadLayout(Layout);

class App extends Component {
    render() {
        return (
            <ProductItemProvider>
                <div className="App">
                    <ActiceWithLoadLayout />
                </div>
            </ProductItemProvider>
        );
    }
}

export default App;
