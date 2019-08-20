import React, {Component} from 'react';
import SHOP_DATA from "./shop.data";
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                Shop Page
            </div>
        );
    }
}

export default Shop;