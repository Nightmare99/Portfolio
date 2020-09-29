import React from 'react';
import './Thumb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";

function BigThumb(props) {
    return (
        <div className="big-thumb mb-5">
            {props.children}
        </div>
    );
}

export default BigThumb;