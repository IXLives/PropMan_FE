/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// UI Components
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import SideNav from '../../components/Navigation/SideNav/SideNav';
import PropmanTheme from '../../theme/PropmanTheme';
import { getProperties, getWorkOrders } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(8, 4)
  }
}));

function TenantDashboard(props) {
  const classes = useStyles();

  // setup dispatch to dispatch get properties action
  const dispatch = useDispatch();
  // useEffect for initial get properties dispatch
  useEffect(() => {
    dispatch(getProperties());
    dispatch(getWorkOrders());
  }, [dispatch]);

  return (
    <PropmanTheme>
      <div className={classes.root}>
        <SideNav />
        <main className={classes.content}>
          <Container className="dashboard-content">{props.children}</Container>
        </main>
      </div>
    </PropmanTheme>
  );
}

export default TenantDashboard;
