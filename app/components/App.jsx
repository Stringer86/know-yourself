import { BrowserRouter } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';
import axios from 'axios';
import { Match, Miss } from 'react-router';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      isLoggedIn: false,

      lessons: [],

      wishes: [],

      userData: []
    }
  }

  componentDidMount() {
    axios.get('/api/token')
      .then(res => {
        this.setState({ isLoggedIn: res.data });
      })
      .catch(err => {
        this.setState({ loadErr: err });
      });
  }

  getLessons(lessons) {
    this.setState({ lessons: lessons });
  }

  getUserData(userData) {
    this.setState({ userData: userData });
  }

  getWishList(wishes) {
    this.setState({ wishes: wishes })
  }

  authUser(bool) {
    this.setState({ isLoggedIn: bool});
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <Header
            isLoggedIn={this.state.isLoggedIn}
            authUser={this.authUser.bind(this)}
            />
        <main>
          <Main
            authUser={this.authUser.bind(this)}
            userData={this.state.userData}
            getUserData={this.getUserData.bind(this)}
            lessons={this.state.lessons}
            getLessons={this.getLessons.bind(this)}
            isLoggedIn={this.state.isLoggedIn}
            wishes={this.state.wishes}
            getWishList={this.getWishList.bind(this)}
          />
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    )
  }
};
