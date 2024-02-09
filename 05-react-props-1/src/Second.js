import React, { useState } from 'react';


function Second(props) {
    return ( 
        <React.Fragment>
            <h1>String Data ... {props.str}</h1>
           <h1>Number Data ... {props.num}</h1>
           <h1>Boolean Data ... {JSON.stringify(props.flag)}</h1>
           <h1>JSON Data ... {JSON.stringify(props.obj)}</h1>
           
           <hr></hr>

            <table>
            <tr>
                <th>SNO</th>
                <th>P_ID</th>
                <th>P_NAME</th>
                <th>P_COST</th>
            </tr>
            {
                props.products.map( (element,index) => (
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

export default Second;