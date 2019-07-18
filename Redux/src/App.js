import React from 'react';
import './App.css';
import ProductList from './ProductList';
import SearchHeader from './SearchHeader';


export default class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
    <div>
      <SearchHeader/>    
      <ProductList/>    
    </div>
    );
  }
}

