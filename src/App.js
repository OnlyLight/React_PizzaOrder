import React, {Component} from 'react';
import './App.css';

import ListImage from "./component/ListImage";
import ProductList from './component/ProductList'
import {Badge, Button, Card} from "reactstrap";
import ProductItem from "./component/ProductItem";

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

    this.state = {
        itemsSelected: [
            {id: 1, count: 5},
            {id: 2, count: 2},
            {id: 5, count: 1}
        ]
    }
  }

  loadList() {
      const { titles } = this;
      const { itemsSelected } = this.state;
      var arr = [];

      for (var title of titles) {
          let temp = {
              ...title
          };
          for (var selected of itemsSelected) {
              if (title.id === selected.id) {
                  temp.count = selected.count;
              }
          }
          arr.push(temp);
      }
      return arr;
  }

  totalBill() {
      const { titles } = this;
      const { itemsSelected } = this.state;

      for (var title of titles) {
          for (var selected of itemsSelected) {
              if (title.id === selected.id) {
                  return title.price * selected.count;
              }
          }
      }
  }

  onClickSub() {

  }

  onClickAdd() {

  }

  render() {
      const total = this.totalBill();
      const { itemsSelected } = this.state;
      return (
          <div className="App">
              <header className="App-header container mt-4">
                  <div className="products_show--info mr-3">
                      <h5 className="mb-4">Your pizza:</h5>
                      <ListImage selected={itemsSelected} />
                  </div>

                  <div className="products_show--item">
                      <div className="products_item--overview--info mb-2">
                          <h6>Your pizza <Badge color="secondary">{total}$</Badge></h6>
                          <Button color="warning">Reset pizza</Button>
                      </div>
                      <ProductList clickSub={this.onClickSub} clickAdd={this.onClickAdd} list={this.loadList()}/>
                      <Card className="products_item--total pt-3">
                          <p>Total</p>
                          <p>{total}$</p>
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
