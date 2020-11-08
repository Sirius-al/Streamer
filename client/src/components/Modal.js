import React from 'react';
import ReactDOM from 'react-dom'

import history from '../history'

const Modal = (props) => {
    return ReactDOM.createPortal(
      <div onClick={props.onDismiss} className="ui dimmer modals visible active">

        <div onClick={(e) => e.stopPropagation()} style={{textAlign: 'center'}} className="ui small modal visible active">
          <div className="header" style={{color: 'red'}}>{props.title}</div>
            <div className="description">
              <h4>{props.content}</h4>
              <p>Title: <strong>{props.content2}</strong></p>
            </div>
            <div className="actions">
                {props.actions}
            </div>
        </div>
      </div>,
      document.querySelector("#modal")
    );
}

export default Modal;
