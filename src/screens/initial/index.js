/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { AppLoading } from 'expo';
import {
  selectLoading,
  selectIsDarkTheme,
  selectIsFirstLoad,
  selectToken,
} from '../../redux/app/app.selectors';
import * as mapDispatchToProps from '../../redux/app/app.actions';
import { api } from '../../api';
import { AppContainer } from '../../';

const Initial = props => {
  const { setLoading, loading, isFirstLoad, token } = props;
  useEffect(() => {
    // initial load of assets
    // after completion of load set loading to false
    setLoading(false);
  }, [setLoading]);

  useEffect(() => {
    api.defaults.headers.common.Authorization = token;
    // multipartApi.defaults.headers.common.Authorization = token;
  }, [token]);

  if (loading) {
    return <AppLoading />;
  }

  if (isFirstLoad) {
    return <AppContainer />;
  }

  // return <AppContainer />;
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  isFirstLoad: selectIsFirstLoad,
  isDarkTheme: selectIsDarkTheme,
  token: selectToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(Initial);
