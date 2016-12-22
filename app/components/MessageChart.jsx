import React from 'react';
import axios from 'axios';
import {  Doughnut } from 'react-chartjs-2';


export default class MessageChart extends React.Component {

  render() {
    console.log("hello");

    const data = this.props.entry;

    const doughnutData = {
      labels: ["Anger", "Disgust", "Fear", "Joy", "Sadness"],
      datasets: [
        {
          label: "Watson Summary",
          data: [data.anger, data.disgust, data.fear, data.joy, data.sadness],
          backgroundColor: ['red', 'green', 'goldenrod', 'yellow', 'blue' ],
        }
      ]
    }


    return (
        <div className="row">
        <Doughnut data={doughnutData}
        width={500}
        height={500}
        options={{
        maintainAspectRatio: false
      }}/>
        </div>
    );
  }
}
