import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MessageChart from './MessageChart';
import NotFound from './NotFound';

export default class ReadEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entry: {},
    }

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    const id = Number(location.pathname.slice(7));

    axios.get(`/api/entries/${id}`)
      .then((res) => {
        this.setState({entry: res.data});
      })
      .catch((err) => {
        return err;
      })
  }

  deletePost(event) {
    event.preventDefault();

    axios({
      method: 'delete',
      url: `/api/entries/${this.state.entry.id}`
    })
    .then(res => {
      notify.show('Post Deleted', 'success');
      axios.get('/api/entries')
        .then(res => {
          this.props.getEntries(res.data);
        })
        .catch(err => {
          console.log(err);
      })
    })
    .catch(err => {
      return err;
    })
  }



  render() {

    if (!this.state.entry.id) {
      return <NotFound />
    }


    return (
      <div className="row">
      <br></br>
      <div className="col s12 l7 m7">
        <div className="card readCard">
          <p className="journalBody">{this.state.entry.body}</p>
          <div className="row center-align">
          <a className="btn read"><Link to="/entries" className="white-text">All entries</Link></a>
          <a className="btn delete" onClick={this.deletePost}><Link to="/entries" className="white-text">Delete</Link></a>
          </div>
        </div>
      </div>
      <div className="col s12 l3 offset-l1 m3 offset-m1" id="read-chart">
      <MessageChart entry={this.state.entry}/>
      </div>
      </div>
    );
  }
}
