import React from 'react';
import ReactDOM from 'react-dom';


// stopPropagation to stop bubbling event
//portal to make it a child of body so to avoid  context stacking
const Modal =props =>{
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e)=>e.stopPropagation('/')} className="ui standard modal visible active">
                <div className="header">{props.Title}</div>
                <div className="content">{props.Content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;