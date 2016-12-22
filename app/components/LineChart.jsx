import React from 'react';
import axios from 'axios';
import {Line, Polar, Radar} from 'react-chartjs-2';
import {Link} from 'react-router';


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

    let start = 0;
    const lineDataLabels = entries.map((e) => {
      start++;
      return `Post ${start}`
    })
    const lineData = {
    labels: lineDataLabels,
    datasets: [
        {
            label: "Joy",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#EFF320",
            borderColor: "#EFF320",
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
            backgroundColor: "#0F5DCB",
            borderColor: "#0F5DCB",
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
            backgroundColor: "#A70A0A",
            borderColor: "#A70A0A",
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
            backgroundColor: "#34C916",
            borderColor: "#34C916",
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
            backgroundColor: "#A743EE",
            borderColor: "#A743EE",
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
        <Line data={lineData}
        width={200}
        height={300}
        options={{
        maintainAspectRatio: false
      }}/>
    );
  }
}
