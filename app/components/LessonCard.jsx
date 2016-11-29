import React from 'react';
import { Link } from 'react-router';


export default class LessonCard extends React.Component {

  render() {
    return (
      <div className="row">
      <div className="col s7 card">
        <p><img className="img-circle" src={this.props.data.photoUrl} height='30px' width='30px' />By: {this.props.data.firstName}</p>
        <h4><strong>{this.props.data.title}</strong></h4>
        <p><strong>Category:</strong> {this.props.data.category}</p>
        <p><strong>Concept:</strong> {this.props.data.concept}</p>
        <p><strong>Description:</strong>  {this.props.data.description}</p>
        <p>{this.props.data.body.substring(0, 200)}...</p>
        <div className="btn">read</div>

      </div>
      </div>
    )
  }
}
