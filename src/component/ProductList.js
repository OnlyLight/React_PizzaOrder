import React, {Component} from 'react';
import ProductItem from "./ProductItem";

class ProductList extends Component {
    render() {
        const { list, clickSub, clickAdd } = this.props;

        return(
            <div className="products_list">
                {
                    list.map((item) =>
                        <ProductItem clickSub={clickSub} clickAdd={clickAdd}
                                     key={item.id} title={item.title} price={item.price} count={item.count} />)
                }
            </div>
        );
    }
}

export default ProductList;