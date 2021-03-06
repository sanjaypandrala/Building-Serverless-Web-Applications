import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
    render() {
        const productList = this.props.products.map(product => {
            return (
                <div key={product.id} className="product-box">
                    <Product product={product}/>
                </div>
            )
        });

        return (
            <div>
                {productList}
            </div>
        );
    }
}

export default ProductList;
