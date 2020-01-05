import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from '../action';

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(
            admin => {
                return <li key={admin.id}>{admin.name}</li>
            }
        );
    }

    render() {
        return (
            <div>
                <h3>protected admins:</h3>
                <li>{this.renderAdmins()}</li>
            </div>
        );
    }
}

function mapStateToProps({admins}) {
    return {admins};
}

export default {
    component: connect(mapStateToProps, {fetchAdmins})(AdminsListPage),
    loadData: ({dispatch}) => dispatch(fetchAdmins())
};