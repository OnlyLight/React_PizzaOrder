import React, {Component} from 'react';
import img from '../images/pepperoni-pizza-800x800.png'

import './SCSS/ImageItem.css'

class ImageItem extends Component {
    render() {
        return (
            <div className="img-thumbnail">
                <img className="img-fluid" src={img} alt="pizza"/>
            </div>
        );
    }
}

export default ImageItem;