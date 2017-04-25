import Footer from './Footer';
import Main from './Main';
import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import Notifications, {notify} from 'react-notify-toast';
import Header from './Header';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.authUser = this.authUser.bind(this);
    this.getEntries = this.getEntries.bind(this);
    this.sortIt = this.sortIt.bind(this);

    this.state = {
      isLoggedIn: false,
      entries: [],
      search: '',
      hideBtn: true
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

  sortIt(selectValue) {
    let value;
    if (selectValue === 'Saddest') value = 'sadness';

    if (selectValue === 'Angriest') value = 'anger';

    if (selectValue === 'Most Full of Disgust') value = 'disgust';

    if (selectValue === 'Most Fearful') value = 'fear';

    if (selectValue === 'Most Joyous') value = 'joy';

    if (selectValue === 'Most Recent') value = 'createdAt';

    let entries = this.state.entries.sort((a, b) => {
      if (value !== 'createdAt') {
        if (Number(a[value]) < Number(b[value])) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (new Date(a[value]).getTime() < new Date(b[value]).getTime()) {
          return 1;
        } else {
          return -1;
        }
      }
    });

    this.setState({entries: entries })

  }

  handleSearch(searchTerm) {

    this.setState({search: searchTerm})

  }

  render() {
    return (
      <BrowserRouter>
      <div>
          <Notifications />
          <Header authUser={this.authUser}
                  isLoggedIn={this.state.isLoggedIn}/>
            <Main
                { ... this.state }
                handleSearch={this.handleSearch}
                authUser={this.authUser}
                getEntries={this.getEntries}
                sortIt={this.sortIt}
                />
          <Footer />
          </div>
      </BrowserRouter>
    )
  }
};
