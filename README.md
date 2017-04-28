# React Native Input List Components

A React Native library with input components.

![alt text](http://i.imgur.com/shgdu4N.png)

<img src="http://i.imgur.com/shgdu4N.png">

## Components

* InputText - Text/Numeric input field

## Install

```bash
npm install --save react-native-input-list
```

## Usage

```js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { InputText } from 'react-native-input-list';

export default class App extends Component {

  showValues = () => {
    const firstValue = `First input: ${this.refs.firstInput.value()}\n`;
    const secondValue = `Second input: ${this.refs.secondInput.value()}\n`;
    const thirdValue = `Third input: ${this.refs.thirdInput.value()}\n`;

    const text = firstValue + secondValue + thirdValue;

    Alert.alert(
      'Values',
      text
    );
  }

  areValid = () => {
    const firstValid = `First input: ${!!this.refs.firstInput.valid()}\n`;
    const secondValid = `Second input: ${!!this.refs.secondInput.valid()}\n`;
    const thirdValid = `Third input: ${!!this.refs.thirdInput.valid()}\n`;

    const text = firstValid + secondValid + thirdValid;

    Alert.alert(
      'Valid?',
      text
    );
  }

  showErrors = () => {
    this.refs.firstInput.showError();
    this.refs.secondInput.showError();
    this.refs.thirdInput.showError();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Inputs</Text>
        <View>
          <InputText ref="firstInput" required type="withLabel" label="With label"/>
          <InputText ref="secondInput" label="Without label"/>
          <InputText ref="thirdInput" keyboardType="numeric" label="Numeric"/>
          <InputText ref="fourthInput" type="withLabel" label="With styles" containerStyles={styles.inputStyles}/>
        </View>
        <View>
          <TouchableOpacity onPress={this.showValues}>
            <Text style={styles.action}>SHOW VALUES</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.areValid}>
            <Text style={styles.action}>VALID?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.showErrors}>
            <Text style={styles.action}>SHOW ERRORS</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 40
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  action: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: 'blue'
  },
  inputStyles: {
    backgroundColor: 'green'
  }
});
```
