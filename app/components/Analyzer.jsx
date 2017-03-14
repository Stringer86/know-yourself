import { Link } from 'react-router';
import Loading from './Loading';
import MessageChart from './MessageChart';
import React from 'react';
import axios from 'axios';
import { notify } from 'react-notify-toast';

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      loading: false,
      entry: {},
    };
  }

  publishEntry(event) {
    event.preventDefault();

    if (this.refs.body.value.length < 100) {
      notify.show('Too short!', 'error', 2000);

      return;
    }
    this.setState({ loading: true });

    axios.post('/api/analyzer', {
      body: this.refs.body.value,
    })
    .then((res) => {
      notify.show('Analysis complete!', 'success');
      this.setState({ submitted: true, loading: false, entry: res.data });
      this.refs.body.value = '';
    })
    .catch((err) => {
      notify.show('something went wrong', 'error');
    });
  }

  changeState(event) {
    event.preventDefault();

    this.setState({ submitted: false });
  }
  render() {
    const text = this.state.entry.sentences;

    let sentences;

    if (text) {
      sentences = text.map((sentence) => {
        return <p><span className={sentence.highest}>{sentence.text}</span></p>;
      });
    }

    const entry = this.state.entry.emotions;
    let highest;

    if (entry) {
      highest = Object.keys(entry).reduce((a, b) => { return entry[a] > entry[b] ? a : b; });
      highest = highest[0].toUpperCase() + highest.slice(1);
    }

    return (
      <div className="center-align analyzer">
        { this.state.loading &&
        <Loading />
        }
        { !this.state.submitted && !this.state.loading &&
          <div className="row center-align">
            <h1>Input your email, message, or blog post and we'll analyze it for you.</h1>
            <div className="row">
              <div className="input-field col s12 col l8 offset-l2 col m8 offset-m2">
                <textarea id="textarea2" ref="body" placeholder="enter text here" autoFocus></textarea>
              </div>
            </div>
            <div className="row">
              <a className="btn" onClick={this.publishEntry.bind(this)}>Analyze!</a>
            </div>

          </div>
          }
          { this.state.submitted &&
            <div className="row align-center">
              <div className="row">
                <div className="col s12 m12 l6">
                  <div className="card"> {sentences } </div>
                    <strong>Highlights indicate the emotion with the highest score for each sentence.</strong>
                  <br></br>
                  <br></br>
                  <div className="row">
                    <a className="btn" onClick={this.changeState.bind(this)}><Link to="/analyzer" className="white-text">New Post</Link></a>
                  </div>
                </div>
                <div className="col s12 m12 l6">
                  <MessageChart entry={this.state.entry.emotions} />
                  <h1>Is <strong>{highest}</strong> the emotion you most wanted to convey?</h1>
                  <p><Link to="/interpretation">How do I interpret this?</Link></p>
                </div>
              </div>
            </div>
          }
      </div>
    );
  }
}
