import { StyleSheet } from 'react-native';

const variables = {
  gray: '#AAAAAA',
  lightestGray: '#FAFAFA',
  red: '#D21A09',
  font: 'AvenirNext-Regular'
};

export default StyleSheet.create({
  formContainer: {
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
  }
});
