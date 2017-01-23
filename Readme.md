# React Native Input List Components

A React Native library with components for Input Lists (like forms).

## Components

* InputTextItem - Text/Numeric input field

## Install

```bash
npm install --save react-native-input-list
```

## Usage

```js
import React, { View } from 'react-native';

import { InputTextItem } from 'react-native-input-list';

class MyComponent extends React.Component {

  showErrors () {
    if (this.refs.firstName.valid()) {
      this.refs.firstName.showError();
    }

    if (this.refs.lastName.valid()) {
      this.refs.lastName.showError();
    }
  }

  nameValid () {
    return this.refs.firstName.valid() && this.refs.lastName.valid();
  }

  whatsMyName () {
    alert(`${this.refs.firstName.value()} ${this.refs.lastName.value()}`);
  }

  whatsMyAge () {
    alert(this.refs.age.value());
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <InputTextItem
          ref="firstName"
          required
          defaultValue="John"
          label="First Name" />

        <InputTextItem
          ref="lastName"
          required
          defaultValue="Doe"
          label="First Name" />

        <InputTextItem
          ref="age"
          label="Age"
          keyboardType="numeric" />
      </View>
    );
  }
}
```
