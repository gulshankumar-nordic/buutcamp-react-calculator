import React from 'react';
import "./component.css";
const display = (props) => {
    return ( 
    <div>
        <input type='text' value={props.expression} disabled className="display"/>
    </div> );
}
 
export default display;