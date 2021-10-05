import React from "react";

export default function Input(props) {

    let classes = `fa text-muted fa-${props.iconName}`;

    return (
        <div className="form-control mb-3">
            <label htmlFor={props.name}>
                <i className={classes}></i>
            </label>
            <input className="col-10 border-0" type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} onChange={props.change} value={props.val} />
        </div>
    )
    
}