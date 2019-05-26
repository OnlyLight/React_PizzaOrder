import React, {Component} from 'react';
import ImageItem from "./ImageItem";

class ListImage extends Component {
    render() {
        const { selected } = this.props;

        if (selected.length > 0) {
            return (
                <div className="images_layout row">
                    {
                        selected.map(item =>
                            <ImageItem key={item.id} id={item.id} />)
                    }
                </div>
            );
        } else {
            return (
                <div className="images_layout"></div>
            );
        }
    }
}

export default ListImage;