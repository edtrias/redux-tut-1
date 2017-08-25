import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectUser } from '../actions/index';

class UserList extends Component {

  createListItems() {
    return this.props.users.map(user => {
      return (
        <li key={user.id} onClick={() => this.props.selectUser(user)}>
            {user.first} {user.last}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        {this.createListItems()}
      </div>
    )
  }
}

//takes the state from reducers/index and convert it to props to make it avaliable as props
function mapStateToProps(state) {
  return {
    users: state.users
  }
}

//we pass the function from action creator as props to make it avaliable as props
function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
//connect(mapStateToProps)(UserList) -->
//makes avaliable the state via props in the component UserList
