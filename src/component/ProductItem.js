import React, {Component} from 'react';
import './SCSS/ProductItem.css'
import { Card, Input, Button } from 'reactstrap';

class ProductItem extends Component {
    onChangeInput(event) {

    }

    render() {
        let { count, clickSub, clickAdd, title, price } = this.props;
        if (!count) count = 0;

        return (
            <Card className="products_item--sub">
                <div className="products_item--info">
                    <span>{title}</span>
                    <span>{price}$</span>
                </div>

                <div className="products_item--add">
                    <Button color="danger" onClick={clickSub}>-</Button>
                    <Input type="text" value={count} onChange={this.onChangeInput.bind(this)}/>
                    <Button color="success" onClick={clickAdd}>+</Button>
                </div>
            </Card>
        );
    }
}

export default ProductItem;