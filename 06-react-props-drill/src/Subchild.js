import React, { useState } from 'react';

function Subchild(props) {
    return ( 
    <React.Fragment>
        <h1>{props.str}</h1>
    </React.Fragment> );
}

export default Subchild;

