import React from 'react';


const customInput = (props) => {

    let element = null;

    switch(props.nature){
        case 'input' : element = <input className="form-control" {...props}/>;
            break;
        case 'textarea' : element = <textarea className="form-control" {...props}></textarea>;
            break;
        case 'select' : element = (
            <select {...props} className="form-control">
                {props.option.map((element,index) => {
                    return <option value={element} key={index}>{element}</option>
                })}
            </select>
        );
            break;
        default : element = null;
    }

    return (
        <div>
            {element}
        </div>
    );

};


export default customInput;