import React from 'react';

const SearchHeader = React.forwardRef((props, ref) =>{
    return (
        <header>
            <input type="text" ref={ref}/>
            <button onClick={props.onSearchClicked}>Search</button>
        </header>
    )
});

export default SearchHeader;