import React from 'react';
import axios from 'axios';
import LessonCard from './LessonCard';
import Favorites from './Favorites';
import Lessons from './Lessons';
import IncompleteLessons from './IncompleteLessons';
import { Match, Link} from 'react-router';

export default class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bio: false,
      photo: false
    }
  }
  componentWillMount() {
    axios.get('/api/userData')
      .then(res => {
        this.props.getUserData(res.data).bind(this);
      })
      .catch(err => {
      console.log(err);
    });
  }

  updateBio() {
    this.setState({bio: true})
  }

  updatePhoto() {
    this.setState({photo: true})
  }

  patchBio(bio) {
    axios.patch('/api/user', {
      bio: this.refs['bio'].value
    })
    .then((res) => {
      this.setState({bio: false})
      console.log(res.data);
    })
  }

  patchPhoto(url) {
    axios.patch('/api/user', {
      photoUrl: this.refs['photo'].value
    })
    .then((res) => {
      this.setState({photo: false})
      console.log(res.data);
    })
  }


  render() {
    if (this.props.userData.length === 0) {
      return <div></div>;
    }

    return (
      <div className="row">
        <div className="row" id="profile-container">
          <div className="col s5 offset-s2">
            <h3 id="username">{this.props.userData[0].name}</h3>
            {this.props.userData[0].bio.length > 0 &&
              <h5 id="user-bio">{this.props.userData[0].bio}</h5>
            }
            {this.props.userData[0].bio.length < 1 &&
              <div className="row">
                <div className="btn col s3" onClick={this.updateBio.bind(this)}>Add bio</div>
              </div>
            }
            {this.state.bio &&
              <div className="row">
              <div className="col s8"><textarea ref="bio"></textarea></div>
              <div className="col s2 btn" onClick={this.patchBio.bind(this)}>update</div>
              </div>
            }
            {this.props.userData[0].photoUrl.length < 1 &&
              <div className="row">
                <div className="btn col s3" onClick={this.updatePhoto.bind(this)}>Add photo</div>
              </div>
            }
            {this.state.photo &&
              <div className="row">
              <p><i>link must be a url</i></p>
              <div className="col s6"><input type="text" ref="photo"></input></div>
              <div className="col s2 btn" onClick={this.patchPhoto.bind(this)}>upload</div>
              </div>
            }
          </div>
          <div className="col s3" id="profile-img">
            {this.props.userData[0].photoUrl.length > 0 &&
              <img className="img-circle" src={this.props.userData[0].photoUrl} height="100px" width="100px;" />
            }
          </div>
          <div className="row center-align">
            <div className="col s12 m7 offset-m2">
              <div class="row">
              <ul id="profile-section">
                <li>
                  <div className="col s4 section-title">
                    <h5><Link to="/profile/myLessons">My Lessons</Link></h5>
                  </div>
                </li>
                <li className="col s4">
                  <div className="section-title">
                    <h5><Link to="/profile/incompleteLessons">Unpublished</Link></h5>
                  </div>
                </li>
                <li className="col s4">
                  <div className="section-title">
                    <h5><Link to="/profile/favorites">Favorites</Link></h5>
                  </div>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>

        <div className="row align-center">
          <div className="col s12">
            <Match pattern="/profile/myLessons" exactly render={
              () => <Lessons myLessons={this.props.myLessons}
                       getMyLessons={this.props.getMyLessons}
                       />
            }/>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <Match pattern="/profile/incompleteLessons" exactly render={
              () => <IncompleteLessons incompleteLessons={this.props.incompleteLessons}
                                getIncompleteLessons={this.props.getIncompleteLessons}
                              />
            }/>

          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <Match pattern="/profile/favorites" exactly render={
              () => <Favorites favorites={this.props.favorites}
                         getFavorites={this.props.getFavorites}
              />
            }/>
          </div>
        </div>
      </div>
    );
  }
}
