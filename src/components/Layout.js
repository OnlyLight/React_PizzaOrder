import React, { useContext } from 'react';

import { ProductItemContext } from '../contexts/ProductItemContext'
import {Badge, Button, Card} from "reactstrap";
import withLoadLayout from "./withLoadLayout";
import ListImage from "./ListImage";
import ProductItem from "./ProductItem";

import './SCSS/Layout.css'

const ActiceWithLoadLayoutListImage = withLoadLayout(ListImage);
const ActiceWithLoadLayoutProductItem = withLoadLayout(ProductItem);

export const Layout = () => {
    const { list, total,
        itemsSelected, onClickSub,
        onClickAdd, onClickReset, onClickCheckout } = useContext(ProductItemContext);

    return(
        <div className="App-header container mt-4">
            <div className="products_show--info mr-3">
                <h5 className="mb-4">Your pizza:</h5>
                <ActiceWithLoadLayoutListImage selected={itemsSelected} />
            </div>

            <div className="products_show--item">
                <div className="products_item--overview--info mb-2">
                    <h6>Your pizza <Badge color="secondary">{total}$</Badge></h6>
                    <Button onClick={onClickReset}
                            color="warning">Reset pizza</Button>
                </div>
                <div className="products_list">
                    {
                        list.map((item) =>
                            <ActiceWithLoadLayoutProductItem
                                clickSub={() => onClickSub(item)}
                                clickAdd={() => onClickAdd(item)}
                                key={item.id}
                                title={item.title}
                                price={item.price}
                                count={item.count} />)
                    }
                </div>
                <Card className="products_item--total pt-3">
                    <p>Total</p>
                    <p>{total}$</p>
                </Card>
                <Card className="products_item--total p-3">
                    <Button color="primary"
                            onClick={onClickCheckout}>Checkout</Button>
                </Card>
            </div>
        </div>
    );
};