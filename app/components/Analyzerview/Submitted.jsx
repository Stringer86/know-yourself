import { Link } from 'react-router-dom';
import MessageChart from '../MessageChart';
import React from 'react';
import axios from 'axios';
import { notify } from 'react-notify-toast';

export default class Submitted extends React.Component {
  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);

  }

  changeState(event) {
    event.preventDefault();

    this.props.changeState(event);
  }

  render() {
    const text = this.props.sentences;

    let sentences;

    if (text) {
      sentences = text.map((sentence) => {
        return <p><span className={sentence.highest}>{sentence.text}</span></p>;
      });
    }

    const entry = this.props.emotions;
    let highest;

    if (entry) {
      highest = Object.keys(entry).reduce((a, b) => { return entry[a] > entry[b] ? a : b; });
      highest = highest[0].toUpperCase() + highest.slice(1);
    }


    if (this.props.submitted) {
        return (
          <div className="row align-center">
          <hr></hr>
            <div className="row">
              <div className="col s12 m12 l6">
                <div className="card"> { sentences } </div>
                  <strong>Highlights indicate the emotion with the highest score for each sentence.</strong>
                <br></br>
                <br></br>
                <div className="row">
                  <a className="btn" onClick={this.changeState}><Link to="/analyzer" className="white-text">New Post</Link></a>
                </div>
              </div>
              <div className="col s12 m12 l6">
                <MessageChart entry={this.props.emotions} />
                <h1>Is <strong>{highest}</strong> the emotion you most wanted to convey?</h1>
                <p><Link to="/interpretation">How do I interpret this?</Link></p>
              </div>
            </div>
          </div>
      )
    } else {
      return null;
      }

  }
}
