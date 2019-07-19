import React from 'react';
import { connect } from 'react-redux';
import { updateSearchTerm } from './store/actions/products/productActions';

class SearchHeader extends React.Component {
    state={
        searchTerm:''
    };
    
    onSearchChange = (e)=>{
        this.setState({
            searchTerm:e.target.value
        });
    }

    onUpdateSearchTerm = ()=>{
        this.props.updateSearchTerm(this.state.searchTerm)
    }

    render() {
        return (
            <header>
                <form onSubmit={(e)=>{e.preventDefault()}}> 
                    <input type="text" value={this.state.searchTerm} onChange={this.onSearchChange}/>
                    <button onClick={this.onUpdateSearchTerm}>Search</button>
                </form>
            </header>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearchTerm: (searchTerm) => {
            dispatch(updateSearchTerm(searchTerm));
        }
    }
}


export default connect(null, mapDispatchToProps)(SearchHeader);