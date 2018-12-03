import React, { Component } from 'react';
import api from '../../../../api';

import { Route, Link, NavLink, Switch } from 'react-router-dom';
import { log } from 'util';


class Pull extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likedByUser: false,
      numberVotes: 0
    }
  }


  handleClick = () => {
    this.props.click(this.props.id)
  }



  toggleVote() {
    this.setState({
      likedByUser: !this.state.likedByUser
    })
    api.castVote({
      _user: this.props.user._id,
      _pull: this.props.pull._id
    })
  }


  render() {
    let buttonText = "Like"
    if (this.state.likedByUser) buttonText = "Unlike"
    return (
      <div className="Pull" >
        <p >{this.props.title}</p>
        <button onClick={()=> this.toggleVote()}>{buttonText}</button>
        {this.state.likedByUser && <p>Liked by user!</p>}
        {/* <p>{props.repoName}</p> */}
  
      </div>
    )

  }
}


export default Pull;