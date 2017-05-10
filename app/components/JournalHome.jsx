import React from 'react';
import axios from 'axios';
import Notifications, {notify} from 'react-notify-toast';
import BlueLoading from './Journal-components/BlueLoading';
import Journal from './Journal-components/Journal';
import SubmittedEntry from './Journal-components/SubmittedEntry';

export default class JournalHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      loading: false,
      entry: {},
    }

    this.publishEntry = this.publishEntry.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#6e9bc4'
  }

  deletePost(event, id) {
    event.preventDefault();

    axios({
      method: 'delete',
      url: `/api/entries/${this.state.entry[0].id}`
    })
    .then(res => {
      notify.show('Post Deleted', 'success');
      this.setState({submitted: false, entry: {}})
    })
    .catch(err => {
      return err;
    })
  }

   publishEntry(event, body) {
     event.preventDefault();

     this.setState({loading: true})

     axios.post('/api/entries', {
       body: body.value,
     })
     .then((res) => {
       notify.show('Published!', 'success');
       this.setState({submitted: true, loading: false, entry: res.data})
       body.value = '';
     })
     .catch(err => {
       notify.show("something went wrong", 'error')
     })

   }

  render() {
    return (
      <div className="journal-background">
        <BlueLoading loading={this.state.loading} />
        <Journal submitted={this.state.submitted} loading={this.state.loading} publishEntry={this.publishEntry} />
        <SubmittedEntry entry={this.state.entry} submitted={this.state.submitted} deletePost={this.deletePost} />
      </div>

      )

  }
}
