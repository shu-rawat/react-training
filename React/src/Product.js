import React from 'react';

const Product  = (props)=>{
    return (
    <div className="product-desc">
        <h4>{props.Category}/{props.MainCategory}/{props.ProductId}</h4>
        <h2>{props.Name}</h2>
        {props.showFullDesc?<p>{props.Description}</p>:null}
        <span>{props.Price}</span>        
    </div> 
    );
}

export default Product;