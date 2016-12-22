import React from 'react';
import axios from 'axios';
import {  Doughnut } from 'react-chartjs-2';
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';


export default class MessageChart extends React.Component {

  render() {
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
        <LazyLoad height={200}>
        <Doughnut data={doughnutData}
        width={500}
        height={500}
        options={{
        maintainAspectRatio: false
      }}/>
      </LazyLoad>
        </div>
    );
  }
}
