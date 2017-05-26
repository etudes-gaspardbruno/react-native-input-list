import React, { PropTypes, Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import generateStyles from './styles/styles';
import defaultVariables from './styles/variables';

let styles, variables;

export default class InputCountrySelector extends Component {

  static propTypes = {
    // Config
    required: PropTypes.bool,
    type: PropTypes.string,
    keyboardType: PropTypes.string,

    // Label & placeholder
    label: PropTypes.string,
    defaultValue: PropTypes.string,

    // Styles
    containerStyles: PropTypes.any,
    labelContainerStyles: PropTypes.any,
    labelStyles: PropTypes.any,
    valueContainerStyles: PropTypes.any,
    placeholderStyles: PropTypes.any,
    valueStyles: PropTypes.any,
    errorColor: PropTypes.string,
  }

  constructor(props) {
    variables = Object.assign({}, defaultVariables, props.styleVariables);
    styles = generateStyles(variables);

    props.errorColor = props.errorColor || variables.red;

    super(props);

    this.state = {
      value: this.props.defaultValue || '',
      error: false
    }
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

  _focusInput = () => {
    this.refs.input.openModal();
  }

  _updateInput = (value) => {
    this.setState({
      value: value.name,
      error: false
    });
  }


  render() {
    const { label, required, type, containerStyles, labelContainerStyles,
      labelStyles, valueContainerStyles, placeholderStyles, valueStyles, errorColor,
      placeholderColor } = this.props;
    const { value, error } = this.state;

    const labelText = required ? `${label} *` : label;
    const placeholder = type === 'withLabel' ? '' : label;
    const valueText = value || placeholder;

    const containerStyle = [styles.formContainer, containerStyles];

    const labelContainerStyle = [styles.formLabelContainer, labelContainerStyles];
    const labelStyle = error ? [styles.formLabel, labelStyles, styles.error] : [styles.formLabel, labelStyles];

    const valueContainerStyle = [styles.formValueContainer, valueContainerStyles];
    const placeholderStyle = error ? [styles.formValuePlaceholder, placeholderStyles, styles.error] : [styles.formValuePlaceholder, placeholderStyles];
    const valueStyle = value ? [styles.formValue, valueStyles] : [styles.formValue, valueStyles, placeholderStyle];

    const countryPickerStyle = styles.countryPicker;

    return (
      <View style={containerStyle}>
        { type === 'withLabel' &&
          <TouchableWithoutFeedback onPress={this._focusInput}>
            <View style={labelContainerStyle}>
              <Text style={labelStyle}>{labelText}</Text>
            </View>
          </TouchableWithoutFeedback>
        }

        <TouchableWithoutFeedback onPress={this._focusInput}>
          <View style={valueContainerStyle}>
            <Text style={valueStyle}>{valueText}</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={countryPickerStyle}>
          <CountryPicker ref="input" cca2="US" onChange={this._updateInput} translation='eng' closeable/>
        </View>
      </View>
    );
  }
}
