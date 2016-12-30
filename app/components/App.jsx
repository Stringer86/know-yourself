import { BrowserRouter } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';
import axios from 'axios';
import { Match, Miss } from 'react-router';
import Notifications, {notify} from 'react-notify-toast';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      entries: [],
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

  getEntries(entries) {
    this.setState({ entries: entries })
  }

  authUser(bool) {
    this.setState({ isLoggedIn: bool });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Notifications />
          <Header
              isLoggedIn={this.state.isLoggedIn}
              authUser={this.authUser.bind(this)}
              />
          <main>
            <Main
                isLoggedIn={this.state.isLoggedIn}
                authUser={this.authUser.bind(this)}
                entries={this.state.entries}
                getEntries={this.getEntries.bind(this)}
                />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
};
