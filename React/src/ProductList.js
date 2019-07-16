import React from 'react';
import Product from './Product';

const ProductList = (props)=>{
    let {products, onAddToCart, onQuickView} = props;
    let productList = null;
    if(products && products.length){
        productList = products.map((product)=>(
            <li key={product.ProductId}>
                <div className="product-wrapper">
                    <Product {...product} showFullDesc={false}/>
                    <div>
                        <button onClick={onQuickView.bind(this,product.ProductId)}>Quick View</button>
                        <button onClick={onAddToCart.bind(this,product.ProductId)}>Add To Cart</button>
                    </div>
                </div>    
            </li>
        ));
            
        productList = <ul className="products-list">{productList}</ul>        
    }
    else{
        productList = <div>
            No Products Available
        </div>
    }

    return (
       <div>
           {productList}
       </div>
    )
}

export default ProductList;