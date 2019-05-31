import React, {Component} from 'react';
import { connect } from 'react-redux';

import { clickAdd, clickSub, clickReset, clickCheckout } from '../redux/action'
import { ProductItemContext } from "./ProductItemContext";

class ProductItemProvider extends Component {
    constructor(props) {
        super(props);
        this.titles = [{id: 1, title: 'Cold cuts', price: 5},
            {id: 2, title: 'Pepperoni', price: 3.5},
            {id: 3, title: 'Feta', price: 2.5},
            {id: 4, title: 'Mozzarella', price: 1.5},
            {id: 5, title: 'Swiss cheese', price: 3},
            {id: 6, title: 'Spices', price: 0.5},
            {id: 7, title: 'Vegetables', price: 1.25}];
    }

    loadList() {
        const { titles } = this;
        const { itemsSelected } = this.props;
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
        const { itemsSelected } = this.props;
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

    render() {
        const total = this.totalBill();
        const { itemsSelected, onClickSub, onClickAdd, onClickReset, onClickCheckout } = this.props;
        return (
            <ProductItemContext.Provider value={{
                list: this.loadList(),
                total,
                itemsSelected,
                onClickSub: onClickSub,
                onClickAdd: onClickAdd,
                onClickReset: onClickReset,
                onClickCheckout: onClickCheckout
            }}>
                {this.props.children}
            </ProductItemContext.Provider>
        );
    }
}

function mapStateToProps(state) {
    return {
        itemsSelected: state.itemsSelected
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClickSub: (item) => {
            console.log(item);
            dispatch(clickSub(item));
        },
        onClickAdd: (item) => {
            dispatch(clickAdd(item))
        },
        onClickReset: () => {
            dispatch(clickReset());
        },
        onClickCheckout: () => {
            const total = this.totalBill();
            dispatch(clickCheckout(total));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemProvider);