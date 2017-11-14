import React from 'react';
import Radium from 'radium';
import './Person.css';

import InputField from './InputField';

const person = (props) => {
    return (
    <div className="Person">
        <div onClick={props.click} className="values">
            <img src="https://placehold.it/250x180" alt={props.name}/>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <p>{props.children}</p>
        </div>
        {/* Editing values */}
        <div className="editor">
            <h3>Edit values</h3>
            <InputField 
                label="Set Name: "
                inputType="text"
                changeName={props.changeName}
                name={props.name}/>
            {/* <InputField 
                label="Set Age: "
                inputType="text"
                changeName={props.changedAge}
                name={props.name}/>
            <InputField 
                label="Set Country: "
                inputType="text"
                changeName={props.changedCountry}
                name={props.name}/> */}
        </div>
        
    </div>
    );
};

export default person;