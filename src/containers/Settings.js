import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Settings from '@components/Settings';
import {connect} from 'react-redux';
import {navigateTo} from '@actions/navigation/navigateTo';
import {
  OAUTH
} from '@lib/constants/routes';

mapStateToProps = (state) => {
  return {

  }
};

mapDispatchToProps = (dispatch) => ({
  navigateToOAuth: () => dispatch(navigateTo(OAUTH))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings)