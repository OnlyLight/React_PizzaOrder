import React, {Component} from 'react';

export const ProductItemContext = React.createContext();

export class ProductItemProvider extends Component {
    constructor(props) {
        super(props);
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
            <ProductItemContext.Provider value={{
                list: this.loadList(),
                total: total,
                itemsSelected: itemsSelected,
                onClickSub: this.onClickSub.bind(this),
                onClickAdd: this.onClickAdd.bind(this),
                onClickReset: this.onClickReset.bind(this),
                onClickCheckout: this.onClickCheckout.bind(this)
            }}>
                {this.props.children}
            </ProductItemContext.Provider>
        );
    }
}
