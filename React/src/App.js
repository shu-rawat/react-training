import React from 'react';
import './App.css';
import products from './data.json';
import ProductList from './ProductList';
import SearchHeader from './SearchHeader';
import Modal from './Modal';
import Product from './Product';

export default class App extends React.Component{
  constructor(){
    super();
    let cart = this.getCart();
    this.state = {
      products:[...products],
      cartCount:cart?Object.values(cart).reduce((sum,num)=>(sum+num),0) : 0,
      isModalVisible:false
    }

    this.inputElRef = React.createRef();
  }

  onSearchClicked = ()=>{
    const searchTerm = this.inputElRef.current.value;

    const productsResult = products.filter(product=>product.Name.includes(searchTerm) || 
    product.Category.includes(searchTerm) || product.MainCategory.includes(searchTerm) ||
    product.Description.includes(searchTerm));
    
    this.setState({
      products:productsResult      
    });
  }

  onAddToCart = (ProductId)=>{
    let cart = this.getCart();
    if(!cart[ProductId]){
      cart[ProductId] = 0;      
    }
    ++cart[ProductId];
    localStorage.setItem('cart',JSON.stringify(cart));
    
    this.setState((state)=>{
      return {
        cartCount:state.cartCount+1
      }
    });
  }

  getCart = ()=>{
    let cartStr = localStorage.getItem('cart');
    let cart = {};
    if(cartStr){
      cart = JSON.parse(cartStr);
    }

    return cart;
  }

  onQuickView = (ProductId)=>{
    console.log(ProductId);
    this.setState({
      isModalVisible:true,
      productId:ProductId
    });
  }

  onModalClose = ()=>{
    this.setState({
      isModalVisible:false,
      productId:null
    });
  }


  render(){
    let modal = null;
    if(this.state.productId && this.state.isModalVisible){
      let product = this.state.products.find((product)=>(product.ProductId == this.state.productId));
      if(product){
      modal = <Modal isModalVisible={this.state.isModalVisible} onModalClose={this.onModalClose}>
        <Product {...product} showFullDesc={true} ></Product>
      </Modal>;
      }
    } 

    return (
    <div>
      <SearchHeader onSearchClicked={this.onSearchClicked} ref={this.inputElRef}/>
      <h1>Cart Count: {this.state.cartCount+''}</h1>
      <ProductList 
        onAddToCart={this.onAddToCart} 
        onQuickView={this.onQuickView} 
        products={this.state.products}/>
      {modal}
    </div>
    );
  }
}

