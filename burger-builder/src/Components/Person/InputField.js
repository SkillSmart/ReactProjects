import React from 'react';

const inputField = (props) => {
    return (
        <div className="input-group">
            <label>{props.label}:</label>
            <input 
                className="input-item"
                onChange={props.changeName} 
                value={props.name} 
                type={props.inputType}/>
        </div>
    );
};

export default inputField;