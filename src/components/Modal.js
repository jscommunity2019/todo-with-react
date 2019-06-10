import React from 'react';


const modal = (props) => {
    return (
        <div className="modal fade show" style={{display : 'block'}}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                
                    <div className="modal-header">
                        <h4 className="modal-title">{props.heading}</h4>
                        <button onClick={props.close_click} type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <div className="modal-body">
                        {props.children}
                    </div>
                    
                    <div className="modal-footer">
                        <button onClick={props.close_click} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button onClick={props.submit_click} type="button" className="btn btn-primary" data-dismiss="modal">Save</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default modal;