import React from 'react';

export default class Display extends React.Component {
  constructor(props) {
    super(props);

    this.publishEntry = this.publishEntry.bind(this);
  }

  publishEntry(event) {
    event.preventDefault()
    const body = this.refs.body;
    this.props.publishEntry(event, body)
  }

  render() {
  if (!this.props.submitted && !this.props.loading) {
    return (
    <div className="row center-align">
    <hr></hr>
      <h1>Input your email, message, or blog post and we'll analyze it for you.</h1>
      <div className="row">
        <div className="input-field col s12 col l8 offset-l2 col m8 offset-m2">
          <textarea id="textarea2" ref="body" placeholder="enter text here" autoFocus></textarea>
        </div>
      </div>
      <div className="row">
        <a className="btn" onClick={this.publishEntry}>Analyze!</a>
      </div>
    </div>
  )
  } else {
    return null;
    }
  }
}
