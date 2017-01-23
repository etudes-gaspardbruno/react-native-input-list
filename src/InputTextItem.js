import React, { PropTypes, Component } from 'react';
import {
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';
import styles from './styles/styles';

export default class InputTextItem extends Component {

  static propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    keyboardType: PropTypes.string,
    required: PropTypes.bool
  }

  state = {
    value: this.props.defaultValue || '',
    error: false
  }

  value() {
    return this.state.value;
  }

  valid() {
    return this.state.value && this.state.value.length > 0;
  }

  showError() {
    this.setState({ error: true });
  }

  parseNumericInput(value) {
    let newValue = '';
    let numbers = '0123456789';

    for (var i = 0; i < value.length; i++) {
      if ( numbers.indexOf(value[i]) > -1 ) {
        newValue = newValue + value[i];
      }
    }

    return newValue;
  }

  _focusInput = () => {
    this.refs.input.focus();
  }

  _updateInput = (value) => {
    let val = value;

    if (this.props.keyboardType === 'numeric') {
      val = this.parseNumericInput(val);
    }

    this.setState({
      value: val,
      error: false
    });
  }

  render() {
    const { label, keyboardType, required } = this.props;
    const labelStyles = this.state.error ? [styles.formLabel, styles.error] : styles.formLabel;
    const labelText = required ? `${label} *` : label;

    return (
      <View style={styles.formContainer}>
        <TouchableWithoutFeedback onPress={this._focusInput}>
          <View style={styles.formLabelContainer}>
            <Text style={labelStyles}>{labelText}</Text>
          </View>
        </TouchableWithoutFeedback>
        <TextInput
          ref="input"
          autoCorrect={false}
          style={styles.formInput}
          clearButtonMode="while-editing"
          keyboardType={keyboardType}
          onChangeText={(value) => this._updateInput(value)}
          value={this.state.value}
          {...this.props}
        />
      </View>
    );
  }
}
