import React from 'react';
import axios from 'axios';
import NewUser from './Profileview/NewUser';
import UserInfo from './Profileview/UserInfo';
import ActiveUser from './Profileview/ActiveUser';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
    }
  }

  componentDidMount() {

    if (document.body.style.backgroundColor !== '#f3f3f3') {
      document.body.style.backgroundColor = '#f3f3f3'
    }

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

    if (this.props.entries.length < 4) {
      return (
        <div>
        <UserInfo userInfo={this.state.userInfo} totalPosts={this.props.entries.length} />
        <NewUser />
        </div>
      )
    } else {
      return (
      <div>
      <UserInfo userInfo={this.state.userInfo} totalPosts={this.props.entries.length} />
      <ActiveUser entries={this.props.entries} />
      </div>
      )
    }




  }
}
