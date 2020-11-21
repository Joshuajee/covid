import React from 'react'
import {Link} from 'react-router-dom'

function TableRow(props){
    
    let active = props.table[1][1] - props.table[1][2] - props.table[1][3];
    let activeNew = props.table[1][5] - props.table[1][6] - props.table[1][7];
    let link = "/country/" + props.table[1][9]


    return( 
        <tr> 
            <td><Link to={link}>{props.table[0]}</Link></td>
            <td><Link to={link}>{props.table[1][0]} </Link></td>
            <td><Link to={link}>{props.table[1][1]} </Link></td>
            <td><Link to={link}>{props.table[1][2]} </Link></td>
            <td><Link to={link}>{active} </Link></td>
            <td><Link to={link}>{props.table[1][3]} </Link></td>
            <td><Link to={link}>{props.table[1][5]} </Link></td>
            <td><Link to={link}>{props.table[1][6]} </Link></td>
            <td><Link to={link}>{activeNew} </Link></td>
            <td><Link to={link}>{props.table[1][7]} </Link></td>
        </tr>

            )
}

export default TableRow

/*

 
*/