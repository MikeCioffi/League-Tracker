import React from 'react'
import 'chart.js/auto';

import '../Chart/Chart.css'
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { Doughnut } from "react-chartjs-2";

const Chart = (props) => {

    return (
        <div className='chartContainer'>

          <Doughnut
            data={props.chartData}
            plugins= {[ChartDataLabels]}
            options={{
              plugins: {
                  
                title: {
                  display: true,
                  text: "Last 10 Games",
                  color: 'white'
                },
                legend: {
                  display: false
                },
                datalabels: {
                    display: true,
                    color: "black",
                    align: "center"
                }
              }
            }}
          />
        </div>
      );
}
export default Chart