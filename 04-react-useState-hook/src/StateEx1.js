import React ,{useState} from 'react';
import './StateEx1.css';


function StateEx1() {

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
           <h1>String Data ... {str}</h1>
           <h1>Number Data ... {num}</h1>
           <h1>Boolean Data ... {JSON.stringify(flag)}</h1>
           <h1>JSON Data ... {JSON.stringify(obj)}</h1>
           {
                arr.map((element,index) => (
                    <h5 key ={index}>{element}</h5>
                ))
           }
           <hr></hr>



           <table>
            <tr>
                <th>SNO</th>
                <th>P_ID</th>
                <th>P_NAME</th>
                <th>P_COST</th>
            </tr>
            {
                products.map( (element,index) => (
                    <tr>
                        <td>{index+1}</td>
                        <td>{element.p_id}</td>
                        <td>{element.p_name}</td>
                        <td>{element.p_cost}</td>
                       
                    </tr>

                )



                )
            }
           </table>
        </React.Fragment>
     );
}

export default StateEx1;