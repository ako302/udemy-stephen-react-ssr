import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../action";

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        List of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function loadData(store) {
  console.log("load data");
  return store.dispatch(fetchUsers());
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default { 
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
  };
