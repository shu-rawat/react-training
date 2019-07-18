import React from 'react';
import Product from './Product';
import Cart from './Cart';
import { connect } from 'react-redux';
import { addProduct } from './store/actions/cart/cartActions';
import Modal from './Modal';


class ProductList extends React.Component {
    isModalVisible = false;
    state = {
        productId:null
    }

    onQuickView(productId) {
        this.setState({
            productId
        });
    }

    onAddToCart(productId){
        this.props.addToCart(productId);
    }

    onModalClose = ()=>{
        this.setState({
            productId:null
        });
    }

    renderProductList() {
        let productList = null;
        let { productReducerState:{searchTerm, products} } = this.props;

        if (products && products.length) {
            productList = products.filter(product => product.Name.includes(searchTerm) ||
                product.Category.includes(searchTerm) || product.MainCategory.includes(searchTerm) ||
                product.Description.includes(searchTerm))
                .map((product) => (
                    <li key={product.ProductId}>
                        <div className="product-wrapper">
                            <Product {...product} showFullDesc={false} />
                            <div>
                                <button onClick={this.onQuickView.bind(this, product.ProductId)}>Quick View</button>
                                <button onClick={this.onAddToCart.bind(this, product.ProductId)}>Add To Cart</button>
                            </div>
                        </div>
                    </li>
                ));

            productList = <ul className="products-list">{productList}</ul>
        }
        else {
            productList = <div>
                No Products Available
            </div>
        }

        return productList;
    }

    renderModal() {
        let modal = null;
        let { productReducerState } = this.props;
        if (this.state.productId) {
            let product = productReducerState.products.find((product) => (product.ProductId == this.state.productId));
            if (product) {
                modal = <Modal onModalClose={this.onModalClose}>
                    <Product {...product} showFullDesc={true} ></Product>
                </Modal>;
            }
        }
        return modal;
    }

    render() {
        return (
            <div>
                <Cart cartCount={this.props.cartReducerState.cartCount}/>
                {this.renderProductList()}
                {this.renderModal()}
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{    
    return {
        productReducerState:state.productReducerState,
        cartReducerState:state.cartReducerState
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addToCart:(productId)=>{
            dispatch(addProduct(productId));
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductList);