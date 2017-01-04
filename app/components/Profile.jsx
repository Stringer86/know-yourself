import React from 'react';
import axios from 'axios';
import {Line, Polar, Radar} from 'react-chartjs-2';
import {Link} from 'react-router';
import LineChart from './LineChart';
import PolarChart from './PolarChart';
import Moment from 'moment';
import Loading from './Loading';
import Donors from './Donors';
import Instructables from './Instructables';
import Reveal from 'react-reveal';



export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
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

    if (this.props.entries.length < 4) {  //new member, few posts.
      return (
        <div>
        <div className="row userInfo">
        <div className="col s12 m3 l3">
          <img src="http://www.all-about-psychology.com/psychology-fb.jpg" height="100%" width="100%"></img>
        </div>
        <div className="col s12 m8 offset-m1 l8 offset-l1 profile">
            <h1 id="name">{name}</h1>
            <p>Member since: {formattedDT}</p>
            <p>Total posts: {this.props.entries.length}</p>
          </div>
          </div>
        <div className="row">
        <div className="col s12 m3 l3 sidebar">
            <a className="btn sidebtn"><Link to="/myjournal" className="white-text">New Entry</Link></a>
            <a className="btn sidebtn"><Link to="/entries" className="white-text">Past Entries</Link></a>
            <a className="btn sidebtn"><Link to="/analyzer" className="white-text">Analyzer</Link></a>
            <a className="btn sidebtn"><Link to="/bigfive" className="white-text">Big Five</Link></a>
          </div>
          <div className="col s12 m8 offset-m1 l8 offset-l1 center-align">
          <div className="row card timeline center-align">
          <h3>My Timeline</h3>
            <p>Write 5 entries to see your timeline in action!</p>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <div className="row card timeline center-align">
            <h3>My Personality</h3>
            <p>Once you have 5 entries, check back here!</p>
          </div>
          </div>

          </div>


        </div>
      )
    }

    const entry = entries[entries.length -1]

    const arr = ['fear', 'anger', 'sadness', 'joy', 'disgust']

    const highest = arr.reduce((accum, curr, idx) => {
      if (accum === 'minimum') return curr;
      if (entry[accum] <= entry[curr]) return curr;
      return accum
    }, 'minimum');

    function api(highest) {
      if (highest === 'joy') return <Donors />
      return <Instructables />
    }

    return (
      <div>
      <div className="row userInfo">
      <div className="col s12 m3 l3">
        <img src="http://www.all-about-psychology.com/psychology-fb.jpg"></img>
      </div>
        <div className="col s12 m8 offset-m1 l8 offset-l1 profile">
          <h1 id="name">{name}</h1>
          <p>Member since: {formattedDT}</p>
          <p>Total posts: {this.props.entries.length}</p>
        </div>
        </div>
      <div className="row">
        <div className="col s12 m3 l3 sidebar">
          <a className="btn sidebtn"><i className="material-icons right">add</i><Link to="/myjournal" className="white-text">New Entry</Link></a>
          <a className="btn sidebtn"><Link to="/entries" className="white-text">Past Entries</Link></a>
          <a className="btn sidebtn"><Link to="/analyzer" className="white-text">Analyzer</Link></a>
          <a className="btn sidebtn"><Link to="/bigfive" className="white-text">Big Five</Link></a>
        </div>
        <div className="col s12 m8 offset-m1 l8 offset-l1">
        <div className="row card timeline center-align">
        <h3>My Timeline</h3>
        <LineChart entries={this.props.entries}
        />
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <Reveal effect="animated fadeIn">
        {api(highest)}
        </Reveal>
        <br></br>
        <hr></hr>
        <br></br>
        <Reveal effect="animated fadeIn">
        <div className="row card timeline">
          <div className="col s9 m9 l9 center-align">
          <h3>My Personality</h3>
          <br></br>
          <PolarChart entries={this.props.entries}/>
          </div>
          <div className="col s3 m3 l3">
            <p id="scores"><em>Scores are calculated based on your previous posts and are out of 100. Read about each <Link to="/bigfive">here</Link></em></p>
          </div>

        </div>
        </Reveal>
        </div>

        </div>


      </div>
    );
  }
}
