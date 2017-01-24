import React, { PropTypes, Component } from 'react';
import { Text, Switch, View } from 'react-native';

import * as stylesVariables from './styles/variables';
import styles from './styles/styles';

export default class InputSwitch extends Component {

  static propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    onUpdate: PropTypes.func
  }

  state = {
    value: this.props.defaultValue || false
  }

  value() {
    return this.state.value;
  }

  _updateInput = (value) => {
    if (this.props.onUpdate) {
      this.props.onUpdate(value);
    }

    this.setState({
      value: value
    })
  }

  render() {
    const { label } = this.props;

    return (
      <View style={styles.formContainer}>
        <View style={styles.formLabelContainer}>
          <Text style={styles.formLabel}>{label}</Text>
        </View>
        <Switch
          onValueChange={(value) => this._updateInput(value)}
          value={this.state.value}
          onTintColor={stylesVariables.yellow} />
      </View>
    );
  }
}
