import React from 'react';
import './Thumb.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Thumb(props) {
    return (
        <div className="thumb mb-5">
            {props.children}
        </div>
    );
}

export default Thumb;