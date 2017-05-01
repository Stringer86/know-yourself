import React from 'react';
import axios from 'axios';
import { Polar } from 'react-chartjs-2';

const PolarChart = (props) => {

    const entries = props.entries;

    const bigFive = entries.map((e) => {
      return [parseFloat(e.openness), parseFloat(e.conscientiousness), parseFloat(e.extraversion), parseFloat(e.agreeableness), parseFloat(e.emotionalRange)]
    })

    const openness = entries.map((e) => {
      return parseFloat(e.openness)
    })

    const conscientiousness = entries.map((e) => {
      return parseFloat(e.conscientiousness)
    })

    const extraversion = entries.map((e) => {
      return parseFloat(e.extraversion)
    })

    const agreeableness = entries.map((e) => {
      return parseFloat(e.agreeableness)
    })

    const emotionalRange = entries.map((e) => {
      return parseFloat(e.emotionalRange)
    })

    const opennessSum = entries.reduce((acc, e) => {
      return acc + parseFloat(e.openness);
    }, 0)

    const opennessAvg = opennessSum/entries.length;

    const conscientiousnessSum = entries.reduce((acc, e) => {
      return acc + parseFloat(e.conscientiousness);
    }, 0)

    const conscientiousnessAvg = conscientiousnessSum/entries.length;

    const extraversionSum = entries.reduce((acc, e) => {
      return acc + parseFloat(e.extraversion);
    }, 0)

    const extraversionAvg = extraversionSum/entries.length;

    const agreeablenessSum = entries.reduce((acc, e) => {
      return acc + parseFloat(e.agreeableness);
    }, 0)

    const agreeablenessAvg = agreeablenessSum/entries.length;

    const neuroticismSum = entries.reduce((acc, e) => {
      return acc + parseFloat(e.emotionalRange);
    }, 0)

    const neuroticismAvg = neuroticismSum/entries.length;

    Chart.defaults.global.animation.duration = 4000;

  const polarData = {
    labels: ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"],
    datasets: [
      {
        data: [opennessAvg, conscientiousnessAvg, extraversionAvg, agreeablenessAvg, neuroticismAvg],
        backgroundColor: ['#f1c40f', '#e67e22', '#16a085', '#2980b9', 'red'],
      }
    ]}

    return (
      <div>
        <Polar data={polarData} width={300}
               height={300}
               options={{ maintainAspectRatio: false }}
        />
      </div>
    );
}

module.exports = PolarChart;
