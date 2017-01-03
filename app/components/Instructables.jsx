import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Loading from './Loading';


export default class Instructables extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiData: [],
    }
  }

  componentDidMount() {

    axios.get('/api/instructables')
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

    const URL = 'http://www.instructables.com' + this.state.apiData.url;

    console.log(this.state.apiData);

    return (
      <div className="row apiInfo card">
        <div className="row center-align titleRow">
        <p id="apiTitle">You've seemed unhappy lately. Let's channel it into something creative!</p>
        </div>
        <div className="row">
          <img className="col s4" src={this.state.apiData.imageUrl}></img>
          <div className="col s7">
          <p><strong>Title: </strong><i>{this.state.apiData.title}</i></p>
          <p><strong>Category:</strong> {this.state.apiData.category}</p>
          <p><strong>Author:</strong> {this.state.apiData.author}</p>
          <div className="row center-align ">Click<a href={URL} target="_blank"> Here</a> to learn how to make it</div>
          </div>
        </div>
      </div>
    );
  }
}
