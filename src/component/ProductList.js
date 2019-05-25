import React, {Component} from 'react';
import ProductItem from "./ProductItem";

class ProductList extends Component {
    loadList() {
        const { titles, itemsSelected } = this.props;
        var arr = [];

        for (var title of titles) {
            for (var selected of itemsSelected) {
                if (title.id === selected.id) {
                    title.count = selected.count;
                }
            }
            arr.push(title);
        }
        return arr;
    }

    render() {
        const titles = this.loadList();

        return(
            <div className="products_list">
                {
                    titles.map((item) =>
                        <ProductItem key={item.id} title={item.title} price={item.price} count={item.count} />)
                }
            </div>
        );
    }
}

export default ProductList;