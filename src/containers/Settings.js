import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Settings from '@components/Settings';
import {connect} from 'react-redux';

mapStateToProps = (state) => {
  return {

  }
};

maDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, maDispatchToProps)(Settings)