import React from 'react';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { Table } from '@material-ui/core';
import Axios from 'axios';

function FreeBoard(props) {
       Axios.get("/board").then(
    (response) => {
      console.log(response);
       
    }
    );
    return (
        <div>
           {/* <Table>
               <TableHead>
                   <TableCell>번호</TableCell>
                   <TableCell>제목</TableCell>
                   <TableCell>작성자</TableCell>
               </TableHead>
               <TableBody>
                   <TableCell>작성자</TableCell>
                   <TableCell>제목</TableCell>
                   <TableCell>제목</TableCell>
                    
               </TableBody>
           </Table> */}
        </div>

    );
}

export default FreeBoard;