import React from 'react';
import axios from 'axios';
import {Line, Polar, Radar} from 'react-chartjs-2';
import {Link} from 'react-router';


export default class Profile extends React.Component {

  componentDidMount() {
    axios.get('/api/entries')
      .then(res => {
        this.props.getEntries(res.data);
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });
  }

  render() {
    if (this.props.entries.length === 0) {
      return false;
    }

    const entries = this.props.entries;

    const bigFive = entries.map((e) => {
      return [parseFloat(e.openness), parseFloat(e.conscientiousness), parseFloat(e.extraversion), parseFloat(e.agreeableness), parseFloat(e.emotionalRange)]
    })

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

  //   const radarData = {
  //   labels: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"],
  //   datasets: [
  //     {
  //     label: "Post 1",
  //     borderColor: 'blue',
  //     data: bigFive[0],
  //     backgroundColor: 'rgba(00, 255, 00, 0.1)',
  //   },
  //   {
  //   label: "Post 2",
  //   borderColor: 'yellow',
  //   data: bigFive[1],
  //   backgroundColor: 'rgba(255, 255, 00, 0.1)',
  //   },
  //   {
  //   label: "Post 3",
  //   borderColor: 'blue',
  //   data: bigFive[2],
  //   backgroundColor: 'rgba(255, 00, 00, 0.1)',
  //   },
  //   {
  //   label: "Post 4",
  //   borderColor: 'blue',
  //   data: bigFive[3],
  //   backgroundColor: 'rgba(255, 255, 255, 0.1)',
  //   },
  //   {
  //   label: "Post 5",
  //   borderColor: 'blue',
  //   data: bigFive[4],
  //   backgroundColor: 'rgba(145, 25, 200, 0.1)',
  //   },
  //
  //   ]
  // }

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
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: joy,
            spanGaps: false,
        },
        {
            label: "openness",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(75,75,192,0.4)",
            borderColor: "rgba(75,72,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,72,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,72,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
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
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "black",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
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
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "yellow",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
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
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "red",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: fear,
            spanGaps: false,
        },
    ]
  }

  const polarData = {
    labels: ["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"],
    datasets: [
      {
        label: "things per thing",
        data: [opennessAvg, conscientiousnessAvg, extraversionAvg, agreeablenessAvg, neuroticismAvg],
        backgroundColor: ['#f1c40f', '#e67e22', '#16a085', '#2980b9', 'red'],
      }
    ]}

    return (
      <div className="row">
        <h1>Your History</h1>
        <div className="col s4">
        <Line data={lineData}
        width={200}
        height={300}
        options={{
        maintainAspectRatio: false
      }}/>
      </div>
      <div className="col s4">
      <Polar data={polarData} width={200}
      height={300}
      options={{
      maintainAspectRatio: false
    }}/>
    </div>
      {/* <div className="col s4">
        <Radar data={radarData}
              width={200}
              height={300}
              options={{
              maintainAspectRatio: false
            }}/>
      </div> */}
      <div className="col s4">
        <button><Link to="/myjournal">New Entry</Link></button>
      </div>

      </div>
    );
  }
}
