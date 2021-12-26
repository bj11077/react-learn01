import React, { useEffect, useState } from 'react';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { Table } from '@material-ui/core';
import Axios from 'axios';
import {withStyles} from '@material-ui/core/styles';
import BoardBody from './BoardBody';

function FreeBoard(props) {

    let [boardData,setBoardData] = useState([{'title':'', 'contents':'', 'regId':'', 'regDate':'', 'hits':0}]);
    
    let [chartData,setChartData] = useState([]);

    useEffect(() =>{
        Axios.get("/board").then(response =>{
            console.log('change');
            console.log(response.data);
            const data = response.data;
            setBoardData(data);
            setChartData(data.map(e=>{
                return e.hits;
            }));
        })
    },[]);



    return (
        <div>
           <Table>
               <TableHead>
                <TableRow>
                   <TableCell>번호</TableCell>
                   <TableCell>제목</TableCell>
                   <TableCell>작성자</TableCell>
                </TableRow>
               </TableHead>
               <TableBody>
                {boardData.map((e)=>{
                    return(
                        <TableRow>
                            <TableCell>{e.title}</TableCell>
                            <TableCell>{e.contents}</TableCell>
                            <TableCell>{e.regId}</TableCell>
                        </TableRow>
                    )
                })}
               </TableBody>
           </Table>
           <BoardBody chartData={chartData}></BoardBody>
        </div>
    );
}

export default FreeBoard;