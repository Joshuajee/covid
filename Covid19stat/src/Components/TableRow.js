import React from 'react'


function TableRow(props){
    
    let active = props.table[1][1] - props.table[1][2] - props.table[1][3];
    let activeNew = props.table[1][5] - props.table[1][6] - props.table[1][7];
    let link = "/country/" + props.table[1][9]


    return( 
        <tr onClick={()=> props.clickEvent(link)}> 
            <td>{props.table[0]}</td>
            <td>{props.table[1][0]} </td>
            <td>{props.table[1][1]} </td>
            <td>{props.table[1][2]} </td>
            <td>{active} </td>
            <td>{props.table[1][3]} </td>
            <td>{props.table[1][5]} </td>
            <td>{props.table[1][6]} </td>
            <td>{activeNew} </td>
            <td>{props.table[1][7]} </td>
        </tr>

            )
}

export default TableRow