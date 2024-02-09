import React, { useState } from 'react';
import Child from './Child';

function Parent() {
    const [str,setStr] = useState("Props-Drill");




    return ( 
    <React.Fragment>
        <Child str = {str}></Child>
    </React.Fragment> );
}

export default Parent;