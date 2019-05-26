import React, {Component} from 'react';

import imgCold from '../images/Cold.png'
import imgPepper from '../images/pepperoni-pizza-800x800.png'
import imgFeta from '../images/Feta.png'
import imgMozza from '../images/Mozzarella.jpg'
import imgSwiss from '../images/Swiss-cheese.png'
import imgSpices from '../images/Spices.png'
import imgVegetables from '../images/Vegetables.png'

import './SCSS/ImageItem.css'

class ImageItem extends Component {
    constructor() {
        super();
        this.url = "";
    }

    getImage(id) {
        switch (id) {
            case 1:
                this.url = imgCold;
                break;
            case 2:
                this.url = imgPepper;
                break;
            case 3:
                this.url = imgFeta;
                break;
            case 4:
                this.url = imgMozza;
                break;
            case 5:
                this.url = imgSwiss;
                break;
            case 6:
                this.url = imgSpices;
                break;
            case 7:
                this.url = imgVegetables;
                break;
        }
    }

    render() {
        const { id } = this.props;
        if (id)
            this.getImage(id);

        return (
            <div className="img-thumbnail col-lg-4">
                <img className="img-fluid" src={this.url} alt="pizza"/>
            </div>
        );
    }
}

export default ImageItem;