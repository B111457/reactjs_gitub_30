import React,{useState} from "react";


function StateEx2() {

    const [str,setStr] = useState("Hello");

    const my_fun = ()=>
    {
        setStr("Java Express");

    }

    return ( 
        <React.Fragment>
            <h1>{str}</h1>
            <button onClick={my_fun}>Change</button>

        </React.Fragment>
     );
}

export default StateEx2;