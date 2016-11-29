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

      user: {
        userName: '',
        bio: '',
        photoUrl: ''
      }
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

  getUserInfo(user) {
    this.setState({ user: user });
  }

  render() {
    console.log(this.state.user);
    return (
      <BrowserRouter>
      <div>
        <Header
            isLoggedIn={this.state.isLoggedIn}
            />
        <main>
          <Main
            user={this.state.user}
            getUserInfo={this.getUserInfo.bind(this)}
            lessons={this.state.lessons}
            getLessons={this.getLessons.bind(this)}
            isLoggedIn={this.state.isLoggedIn}
          />
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    )
  }
};
