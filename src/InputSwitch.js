import React, { PropTypes, Component } from 'react';
import { Text, Switch, View } from 'react-native';

import generateStyles from './styles/styles';
import defaultVariables from './styles/variables';

let styles, variables;

export default class InputSwitch extends Component {

  static propTypes = {
    // Label & default value
    label: PropTypes.string,
    defaultValue: PropTypes.bool,

    // Styles
    containerStyles: PropTypes.any,
    labelContainerStyles: PropTypes.any,
    labelStyles: PropTypes.any,
    switchContainerStyles: PropTypes.any,
    tintColor: PropTypes.string,

    // Callback
    onChange: PropTypes.func
  }

  constructor(props) {
    variables = Object.assign({}, defaultVariables, props.styleVariables);
    styles = generateStyles(variables);

    props.tintColor = props.tintColor || variables.yellow;

    super(props);

    this.state = {
      value: this.props.defaultValue || false
    }
  }

  value() {
    return this.state.value;
  }

  valid() {
    return this.state.value && this.state.value.length > 0;
  }

  showError() {
    return;
  }

  _updateInput = (value) => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }

    this.setState({
      value: value
    })
  }

  render() {
    const { label, containerStyles, labelContainerStyles, labelStyles, tintColor,
      switchContainerStyles } = this.props;
    const { value } = this.state;

    const containerStyle = [styles.formContainer, containerStyles];
    const labelContainerStyle = [styles.formLabelContainer, labelContainerStyles];
    const labelStyle = [styles.formSwitchLabel, labelStyles];
    const switchContainerStyle = [styles.switchContainer, switchContainerStyles];

    return (
      <View style={containerStyle}>
        <View style={labelContainerStyle}>
          <Text style={labelStyle}>{label}</Text>
        </View>
        <View style={switchContainerStyle}>
          <Switch
            onValueChange={this._updateInput}
            value={value}
            onTintColor={tintColor} />
        </View>
      </View>
    );
  }
}
