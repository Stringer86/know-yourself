import React from 'react';
import axios from 'axios';
import {Line, Polar, Radar} from 'react-chartjs-2';
import {Link} from 'react-router';
import LineChart from './LineChart';
import PolarChart from './PolarChart';
import Moment from 'moment';


export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo: []
    }
  }

  componentDidMount() {
    function getEntries() {
      return axios.get('/api/entries')
    }

    function getUserInfo() {
      return axios.get('/api/user')
    }

    axios.all([getEntries(), getUserInfo()])
      .then(axios.spread((entries, userData) => {
        this.props.getEntries(entries.data)
        this.setState({userInfo: userData.data})
      }))
      .catch(err => {
        return err;
      });
  }

  render() {
    if (this.state.userInfo.length === 0) {
      return false;
    }

    const user = this.state.userInfo;
    const name = user[0].name
    const signupDate = user[0].createdAt;

    const entries = this.props.entries;

    const formattedDT = Moment(signupDate).format('LL');
    console.log(formattedDT);


    return (
      <div>
      <hr></hr>
      <div className="row userInfo">
      <div className="col s3">
        <img src="http://www.all-about-psychology.com/psychology-fb.jpg"></img>
      </div>
        <div className="col s8 offset-s1 profile">
          <h1 id="name">{name}</h1>
          <p>Member since: {formattedDT}</p>
          <p>Total posts: {this.props.entries.length}</p>
        </div>
        </div>
      <div className="row">
        <div className="col s2 sidebar">
          <a className="btn"><Link to="/myjournal" className="white-text">Journal</Link></a>
          <p><Link to="/entries">Past Posts</Link></p>
          <p><Link to="/analyzer">Email Analyzer</Link></p>
          <p><Link to="/bigfive">Big Five</Link></p>
        </div>
        <div className="col s8 offset-s2 center-align">
        <div className="row card timeline">
        <h3>My Timeline</h3>
        <LineChart entries={this.props.entries}
        />
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="row card timeline">
          <div className="col s12 m9 l9">
          <h3>My Personality</h3>
          <br></br>
          <PolarChart entries={this.props.entries}/>
          </div>
          <div className="col s12 m3 l3">
            <p id="scores"><em>Scores are calculated based on your previous posts and are out of 100. Read about each <Link to="/bigfive">here</Link></em></p>
          </div>

        </div>
        </div>

        </div>


      </div>
    );
  }
}
