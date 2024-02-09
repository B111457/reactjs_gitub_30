import React, {useState} from "react";

function StateEx3() {
    const [count, setCount] = useState(0);
    const increment = ()=> {
        setCount(prevState => prevState +1);
    }
    const decrement = ()=> {
        setCount(prevState => prevState -1);
    }

    const reset = ()=>{
        setCount(0);
    }
    return ( 
        <React.Fragment>
            <h1>Count - {count}</h1>
            <button onClick={increment}>Incr</button>
            <button onClick={decrement}>Decr</button>
            <button onClick={reset}>Reset</button>
        </React.Fragment>
     );
}

export default StateEx3;

