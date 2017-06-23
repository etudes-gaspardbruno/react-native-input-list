import { StyleSheet, Dimensions, Platform } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function generateStyles(variables) {
  return StyleSheet.create({
    formContainer: {
      height: 52,
      backgroundColor: 'white',
      borderBottomWidth: 2,
      paddingHorizontal: 20,
      paddingVertical: Platform.OS === 'ios' ? 16 : 0,
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
      height: Platform.OS === 'ios' ? 18 : 50,
      paddingBottom: Platform.OS === 'ios' ? 0 : 10,
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
    countrySelectorContainer: {
      paddingVertical: 16,
    },
    countryPicker: {
      top: -height,
      opacity: 0
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
}
