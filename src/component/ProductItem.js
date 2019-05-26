import React, {Component} from 'react';
import './SCSS/ProductItem.css'
import { Card, Input, Button } from 'reactstrap';

class ProductItem extends Component {
    render() {
        let { count, clickSub, clickAdd } = this.props;
        if (!count) count = 0;

        return (
            <Card className="products_item--sub">
                <div className="products_item--info">
                    <span>{this.props.title}</span>
                    <span>{this.props.price}$</span>
                </div>

                <div className="products_item--add">
                    <Button color="danger" onClick={clickSub}>-</Button>
                    <Input type="text" value={count}/>
                    <Button color="success" onClick={clickAdd}>+</Button>
                </div>
            </Card>
        );
    }
}

export default ProductItem;