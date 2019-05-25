import React, {Component} from 'react';
import './SCSS/ProductItem.css'
import { Card, Input, Button } from 'reactstrap';

class ProductItem extends Component {
    render() {
        let { count } = this.props;
        if (!count) count = 0;

        return (
            <Card className="products_item--sub">
                <div className="products_item--info">
                    <span>{this.props.title}</span>
                    <span>{this.props.price}$</span>
                </div>

                <div className="products_item--add">
                    <Button color="danger">-</Button>
                    <Input type="number" value={count}/>
                    <Button color="success">+</Button>
                </div>
            </Card>
        );
    }
}

export default ProductItem;