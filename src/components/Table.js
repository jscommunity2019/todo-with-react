import React from 'react';
import Button from './Button';

const table = (props) => {
    const element = (
        <table className="table table-bordered">
            <tbody>
                <tr>
                    {props.table_head_placeholder.map((element,index) => {
                        return <th key={index}>{element}</th>
                    })}
                </tr>
            </tbody>
            {props.cell_data.map((ele) => {
                return (
                    <tbody key={ele.id}>
                        <tr>
                            {Object.values(ele).map((element) => {
                                return <td key={element}>{element}</td>
                            })}
                            <td><Button name="Edit" click={(event)=>{props.edit(event,ele.id)}} /></td>
                            <td><Button name="Delete" click={(event)=>{props.delete(event,ele.id)}} /></td>
                        </tr>
                    </tbody>
                );
            })}
        </table>
    );
    return (
        <div>
            {element}
        </div>
    );
};

export default table;