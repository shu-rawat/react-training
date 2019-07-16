import React from 'react';

const Modal = (props)=>{
    return (
        <div className='backdrop'>
            <div className='content'>
                {props.children}
                <button onClick={props.onModalClose} className="close-btn">Close</button>
            </div>
            
        </div>
    );
}

export default Modal;