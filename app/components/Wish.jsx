import React from 'react';
import { Link } from 'react-router';


export default class Wish extends React.Component {


  render() {
    return (
      <div className="row">
      <div className="col s12 card">
        <div className="row">
        <div className="col s4">
        <h3>{this.props.data.upvotes}</h3>
        </div>
        <div className="col s7">
        <h4><strong>{this.props.data.question}</strong></h4>
        <p><strong>Category:</strong> {this.props.data.category}</p>

        <div className="col s5 btn">read</div>
        <div className="col s5 offset-s1 btn">Write</div>
        </div>

      </div>
      </div>
      </div>
    )
  }
}
