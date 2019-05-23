import React, {Component} from 'react';
import './App.css';

import ProductItem from './component/ProductItem'
import ImageItem from './component/ImageItem'
import {Badge, Button, Card} from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.titles = [{title: 'Cold cuts', price: 5}, {title: 'Pepperoni', price: 3.5}, {title: 'Feta', price: 2.5}, {title: 'Mozzarella', price: 1.5}, {title: 'Swiss cheese', price: 3}, {title: 'Spices', price: 0.5}, {title: 'Vegetables', price: 1.25}];
  }

  render() {
      return (
          <div className="App">
              <header className="App-header container mt-4">
                  <div className="products_show--info">
                      <h5>Your pizza:</h5>
                      <ImageItem />
                  </div>

                  <div className="products_show--item">
                      <div className="products_item--overview--info mb-2">
                          <h6>Your pizza <Badge color="secondary">10.5$</Badge></h6>
                          <Button color="warning">Reset pizza</Button>
                      </div>
                      {this.titles.map((item, idx) => <ProductItem key={idx} title={item.title} price={item.price} />)}
                      <Card className="products_item--total pt-3">
                          <p>Total</p>
                          <p>10.5$</p>
                      </Card>

                      <Card className="products_item--total p-3">
                          <Button color="primary">Checkout</Button>
                      </Card>
                  </div>
              </header>
          </div>
      );
  }
}

export default App;
