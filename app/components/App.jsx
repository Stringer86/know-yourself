import Footer from './Footer';
import Main from './Main';
import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router';
import Notifications, {notify} from 'react-notify-toast';



export default class App extends React.Component {
  constructor(props) {
    super(props);

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
          <main>
            <Main
                { ... this.state }
                handleSearch={this.handleSearch.bind(this)}
                authUser={this.authUser.bind(this)}
                getEntries={this.getEntries.bind(this)}
                sortIt={this.sortIt.bind(this)}
                />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
};
