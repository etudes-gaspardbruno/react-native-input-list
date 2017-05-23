import { StyleSheet, Dimensions } from 'react-native';
import * as variables from './variables';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
  formContainer: {
    height: 52,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomColor: variables.lightestGray,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  formLabelContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  formLabel: {
    fontSize: 15,
    fontFamily: variables.font,
    color: variables.gray
  },
  formInput: {
    flex: 2,
    height: 18,
    fontSize: 16,
    fontFamily: variables.font,
    textAlign: 'left',
    alignItems: 'flex-start'
  },
  error: {
    color: variables.red
  },
  formValueContainer: {
    height: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  formValue: {
    height: 18,
    lineHeight: 20,
    fontSize: 16,
    fontFamily: variables.font,
  },
  formValuePlaceholder: {
    color: variables.gray
  },
  countryPicker: {
    top: height
  },
  formSwitchLabel: {
    color: 'black',
    height: 18,
    lineHeight: 20,
    fontSize: 16,
    fontFamily: variables.font,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
