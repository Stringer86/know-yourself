import { BrowserRouter } from 'react-router';
// import Footer from './Footer';
// import Header from './Header';
import Main from './Main';
import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      isLoggedIn: false,

      lessons: []
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
    this.setState({ lessons: lessons })
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        {/* <Header /> */}
        <main>
          <Main
            { ... this.state }
            getLessons={this.getLessons}/>
        </main>
        {/* <Footer /> */}
      </div>
      </BrowserRouter>
    )
  }
};
