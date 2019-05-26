import React, {Component} from 'react';
import './App.css';

import ListImage from "./component/ListImage";
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
        ]
    };
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
                  temp = {
                      ...temp,
                      count: selected.count
                  };
              }
          }
          arr.push(temp);
      }
      return arr;
  }

  totalBill() {
      const { titles } = this;
      const { itemsSelected } = this.state;
      let total = 0;

      for (var title of titles) {
          for (var selected of itemsSelected) {
              if (title.id === selected.id) {
                  total += title.price*selected.count;
              }
          }
      }
      return total;
  }

  onClickSub(item) {
      const { itemsSelected } = this.state;
      return (event) => {
          let idx = itemsSelected.findIndex(selected => selected.id === item.id);
          if (item.count > 0) {
              if (idx >= 0) {
                  this.setState({
                      itemsSelected: [
                          ...itemsSelected.slice(0, idx),
                          {id: item.id, count: item.count - 1},
                          ...itemsSelected.slice(idx+1)
                      ]
                  });
              }
          }
      }
  }

  onClickAdd(item) {
      const { itemsSelected } = this.state;
      return (event) => {
          let idx = itemsSelected.findIndex(selected => selected.id === item.id);
          if (idx >= 0) {
              this.setState({
                  itemsSelected: [
                      ...itemsSelected.slice(0, idx),
                      {id: item.id, count: item.count + 1},
                      ...itemsSelected.slice(idx+1)
                  ]
              });
          } else {
              this.setState({
                  itemsSelected: [
                      ...itemsSelected,
                      {id: item.id, count: 1}
                  ]
              });
          }
      }
  }

  onClickReset(event) {
      this.setState({
          itemsSelected: []
      });
  }

  onClickCheckout(event) {
      const total = this.totalBill();
      if (window.confirm(`Do you want checkout ? Your bill are: ${total}$`)) {
          this.setState({
              itemsSelected: []
          });
      }
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
                          <Button onClick={this.onClickReset.bind(this)} color="warning">Reset pizza</Button>
                      </div>
                      <div className="products_list">
                          {
                              this.loadList().map((item) =>
                                  <ProductItem clickSub={this.onClickSub(item)} clickAdd={this.onClickAdd(item)}
                                               key={item.id} title={item.title} price={item.price} count={item.count} />)
                          }
                      </div>
                      <Card className="products_item--total pt-3">
                          <p>Total</p>
                          <p>{total}$</p>
                      </Card>
                      <Card className="products_item--total p-3">
                          <Button color="primary" onClick={this.onClickCheckout.bind(this)}>Checkout</Button>
                      </Card>
                  </div>
              </header>
          </div>
      );
  }
}

export default App;
