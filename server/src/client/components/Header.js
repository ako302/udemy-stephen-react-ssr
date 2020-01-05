import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header =  ({auth}) => {
    console.log("auth: "+auth);
    const authBtn = auth ? (
            <a href="/api/logout">logout</a>
        ):(
            <a href="/api/auth/google">login</a>
        );
    return (
        <nav>
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">React SSR</Link>
            <ul className="right">
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/admins">Admins</Link></li>
                <li>{authBtn}</li>
            </ul>
        </div>
        </nav>
    );
};

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Header);