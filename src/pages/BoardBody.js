import React from 'react';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import ReactApexChart from 'react-apexcharts';
function BoardBody(props) {
    console.log('프롭');
    console.log(props.chartData)
    
    return (
       <ReactApexChart
       type="bar"
       width={600}
       height={600}
       series={[
           {
            name: ' hit',
           data: props.chartData
           }
       ]}
       options={{
           
       }}
       >


       </ReactApexChart>
    );
}

export default BoardBody;