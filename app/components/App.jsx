import { BrowserRouter } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import React from 'react';


export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <main>
          <Main />
        </main>
        <Footer />
      </div>
      </BrowserRouter>
    )
  }
};
