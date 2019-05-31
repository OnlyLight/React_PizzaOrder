import React, {Component} from 'react';
import { connect } from 'react-redux';

import { clickAdd, clickSub, clickReset, clickCheckout } from '../redux/action'
import { ProductItemContext } from "./ProductItemContext";

let totalBill = 0;

class ProductItemProvider extends Component {
    loadList() {
        const { titles, itemsSelected } = this.props;
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
        const { titles, itemsSelected } = this.props;
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
        totalBill = total;
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
        titles: state.titles,
        itemsSelected: state.itemsSelected
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClickSub: (item) => {
            dispatch(clickSub(item));
        },
        onClickAdd: (item) => {
            dispatch(clickAdd(item))
        },
        onClickReset: () => {
            dispatch(clickReset());
        },
        onClickCheckout: () => {
            dispatch(clickCheckout(totalBill));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemProvider);