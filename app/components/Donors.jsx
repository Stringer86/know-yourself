import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Loading from './Loading';


export default class Donors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: [],
    }
  }

  componentDidMount() {

    axios.get('/api/donors')
      .then(res => {
        this.setState({apiData: res.data});
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });


  }



  render() {

    if (this.state.apiData < 1) {
      return (
        <div className="card center-align">
      <Loading />
      </div>
    )
    }
    return (
      <div className="row apiInfo card">
        <div className="row center-align">
        <p id="apiTitle">You seem happy. Why not help out <strong>{this.state.apiData.schoolName}</strong>?</p>
        </div>
        <div className="row">
          <img className="col s4" src={this.state.apiData.imageURL}></img>
          <div className="col s7">
          <p><strong>Title: </strong><i>{this.state.apiData.title}</i></p>
          <p><strong>Location:</strong> {this.state.apiData.city}, {this.state.apiData.state}</p>
          <p><strong>Need:</strong> {this.state.apiData.fulfillmentTrailer}</p>
          <p><strong>Number of Students:</strong> {this.state.apiData.numStudents}</p>
          <blockquote>{this.state.apiData.shortDescription}</blockquote>
          <p>Click<a href={this.state.apiData.fundURL}> Here</a> to help</p>
          </div>
        </div>
      </div>
    );
  }
}
