import { Link } from 'react-router-dom';
import Loading from './Analyzerview/Loading';
import Display from './Analyzerview/Display';
import Submitted from './Analyzerview/Submitted';
import React from 'react';
import axios from 'axios';
import { notify } from 'react-notify-toast';

export default class Analyzer extends React.Component {
  constructor(props) {
    super(props);

    this.publishEntry = this.publishEntry.bind(this)
    this.changeState = this.changeState.bind(this);

    this.state = {
      submitted: false,
      loading: false,
      entry: {},
    };
  }

  publishEntry(event, body) {
    event.preventDefault();

    if (body.value.length < 100) {
      notify.show('Too short!', 'error', 2000);

      return;
    }

    this.setState({ loading: true });

    axios.post('/api/analyzer', {
      body: body.value,
    })
    .then((res) => {
      notify.show('Analysis complete!', 'success');
      this.setState({ submitted: true, loading: false, entry: res.data });
      body.value = '';
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

    return (
      <div className="center-align analyzer">
        <Loading loading={this.state.loading} />
        <Display submitted={this.state.submitted} loading={this.state.loading} publishEntry={this.publishEntry} />
        <Submitted submitted={this.state.submitted}
                   sentences={this.state.entry.sentences}
                   changeState={this.changeState}
                   emotions={this.state.entry.emotions}
        />
      </div>
    )
  }
}
