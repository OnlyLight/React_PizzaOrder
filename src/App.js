import React, {Component} from 'react';
import './App.css';

import ProductList from './component/ProductList'
import ImageItem from './component/ImageItem'
import {Badge, Button, Card} from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.titles = [{id: 1, title: 'Cold cuts', price: 5},
        {id: 2, title: 'Pepperoni', price: 3.5},
        {id: 3, title: 'Feta', price: 2.5},
        {id: 4, title: 'Mozzarella', price: 1.5},
        {id: 5, title: 'Swiss cheese', price: 3},
        {id: 6, title: 'Spices', price: 0.5},
        {id: 7, title: 'Vegetables', price: 1.25}];

    this.itemsSelected = [
        {id: 1, count: 3},
        {id: 2, count: 2},
        {id: 5, count: 1}
    ];
  }

  render() {
      return (
          <div className="App">
              <header className="App-header container mt-4">
                  <div className="products_show--info mr-3">
                      <h5 className="mb-4">Your pizza:</h5>
                      <div className="images_layout">
                          <ImageItem id={1} />
                          <ImageItem id={2} />
                          <ImageItem id={3} />
                          <ImageItem id={4} />
                          <ImageItem id={5} />
                          <ImageItem id={6} />
                          <ImageItem id={7} />
                      </div>
                  </div>

                  <div className="products_show--item">
                      <div className="products_item--overview--info mb-2">
                          <h6>Your pizza <Badge color="secondary">10.5$</Badge></h6>
                          <Button color="warning">Reset pizza</Button>
                      </div>
                      <ProductList titles={this.titles} itemsSelected={this.itemsSelected}/>
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
