import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../action";

class UsersList extends Component {
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
  return store.dispatch(fetchUsers());
}

function mapStateToProps(state) {
  return { users: state.users };
}

export { loadData };

export default connect(mapStateToProps, { fetchUsers })(UsersList);
