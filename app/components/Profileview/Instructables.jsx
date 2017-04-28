import React from 'react';
import axios from 'axios';
import WhiteLoading from '../WhiteLoading';


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
      <WhiteLoading />
      </div>
    )
    }

    const URL = 'http://www.instructables.com' + this.state.apiData.url;

    return (
      <div className="row apiInfo card">
        <div className="row center-align titleRow">
        <p id="apiTitle">You've seemed unhappy lately. Let's channel it into something creative!</p>
        </div>
        <div className="row">
          <img className="col s4" src={this.state.apiData.imageUrl}></img>
          <div className="col s7">
          <p className="apiContent"><strong>Title: </strong><i>{this.state.apiData.title}</i></p>
          <p className="apiContent"><strong>Category:</strong> {this.state.apiData.category}</p>
          <p className="apiContent"><strong>Author:</strong> {this.state.apiData.author}</p>
          <div className="row center-align instructables">Click<a href={URL} target="_blank"> Here</a> to learn how to make it</div>
          </div>
        </div>
      </div>
    );
  }
}
