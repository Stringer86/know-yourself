import React from 'react';
import { Link } from 'react-router';


export default class Wish extends React.Component {
  render() {
    return (
     <div className="row">
       <div className="col s12 card">
         <div className="row">
           <div className="col s4">
               <div className="arrow-up"></div>
               <p className="upvote-count">{this.props.data.upvotes}</p>
               <div className="arrow-down"></div>
           </div>
           <div className="col s7">
             <h4><strong>{this.props.data.question}</strong></h4>
             <p><strong>Category:</strong> {this.props.data.category}</p>
           </div>
         </div>
         <div className="row">
           <div className="col s5 btn">read</div>
           <div className="col s5 offset-s1 btn">
             <Link to={`/write-lesson/${this.props.id}`}>Write</Link>
           </div>
         </div>
       </div>
     </div>
   )
 }
}
