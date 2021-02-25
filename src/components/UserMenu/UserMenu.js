import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/Auth';
import s from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={s.container}>
    <span className={s.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.userLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
