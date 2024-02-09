import React, { useState } from 'react';
import Second from './Second';

function First() {
    const [str,setStr] = useState("Hello");
    const [num,setNum] = useState(100);
    const [flag,setFlag] = useState(true);
    const [obj,setObj] = useState({"sub_one":"ReactJs","sub_two":"NodeJS","sub_three":"MongoDB"});
    const [arr,setArr] = useState(["hello1","hello2","hello3"]);
    const [products,setProducts] = useState(
        [{"p_id":111,"p_name":"p_one","p_cost":10000},
        {"p_id":222,"p_name":"p_one","p_cost":10000},
        {"p_id":333,"p_name":"p_one","p_cost":10000},
        {"p_id":444,"p_name":"p_one","p_cost":10000},
        {"p_id":555,"p_name":"p_one","p_cost":10000}]
    );
    return (
        <React.Fragment>
            <Second str ={str}
                    num={num}
                    flag={flag}
                    obj ={obj}
                    products={products}
                    ></Second>
        </React.Fragment>
      );
}

export default First;
