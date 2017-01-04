import React from 'react';
import axios from 'axios';
import {Line, Polar, Radar} from 'react-chartjs-2';
import {Link} from 'react-router';
import Moment from 'moment';



export default class LineChart extends React.Component {

  render() {
    const entries = this.props.entries;

    const anger = entries.map((e) => {
      return parseFloat(e.anger);
    })

    const disgust = entries.map((e) => {
      return parseFloat(e.disgust)
    })

    const fear = entries.map((e) => {
      return parseFloat(e.fear)
    })

    const joy = entries.map((e) => {
      return parseFloat(e.joy)
    })

    const sadness = entries.map((e) => {
      return parseFloat(e.sadness)
    })

    Chart.defaults.global.animation.duration = 4000;

    const lineDataLabels = entries.map((e) => {
      return Moment(e.createdAt).format('L');
    })

    const lineData = {
    labels: lineDataLabels,
    datasets: [
        {
            label: "Joy",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#F6E481",
            borderColor: "#F6E481",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: joy,
            spanGaps: false,
        },
        {
            label: "sadness",
            fill: false,
            lineTension: 0,
            backgroundColor: "#5687d4",
            borderColor: "#5687d4",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: sadness,
            spanGaps: false,
        },
        {
            label: "Anger",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#771F1F",
            borderColor: "#771F1F",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: anger,
            spanGaps: false,
        },
        {
            label: "Disgust",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#33825e",
            borderColor: "#33825e",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "black",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: disgust,
            spanGaps: false,
        },
        {
            label: "Fear",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#783982",
            borderColor: "#783982",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "black",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: fear,
            spanGaps: false,
        },
    ]
  }

    return (
      <div height="100px" width="100px">
        <Line data={lineData}
        width={55}
        height={300}
        options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              max: 100,
              beginAtZero: true
            }
          }]
        }
      }}/>
      </div>
    );
  }
}
