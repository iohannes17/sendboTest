import React from 'react';
import { Icon } from 'expo';
import {Image} from 'react-native'
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Image
        source={this.props.source}
        style={{ marginBottom: -3,
          height:this.props.height,
          tintColor: this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault,
          width:this.props.width,}}
      />
    );
  }
}

TabBarIcon.propTypes = {
  source: PropTypes.number,
  color:PropTypes.string,
  height:PropTypes.any,
  width:PropTypes.any
};
