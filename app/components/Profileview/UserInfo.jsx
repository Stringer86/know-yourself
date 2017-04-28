import React from 'react';
import Moment from 'moment';

const UserInfo = (props) => {
  const user = props.userInfo;
  const name = user[0].name
  const signupDate = user[0].createdAt;

  const formattedDT = Moment(signupDate).format('LL');

  return (
    <div className="row userInfo">
    <div className="col s12 m3 l3">
      <img src="http://www.all-about-psychology.com/psychology-fb.jpg"></img>
    </div>
    <div className="col s12 m8 offset-m1 l8 offset-l1 profile">
        <h1 id="name">{name}</h1>
        <p>Member since: {formattedDT}</p>
        <p>Total posts: {props.totalPosts}</p>
      </div>
    </div>

  )
}

module.exports = UserInfo;
