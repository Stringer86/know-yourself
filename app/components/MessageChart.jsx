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
          backgroundColor: ['#A70A0A', '#34C916', '#A743EE', '#EFF320', '#0F5DCB' ],
        }
      ]
    }


    return (
        <div className="row analyzersize">
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
