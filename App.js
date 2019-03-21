/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    let pic = {
      uri: 'https://teamairship.com/wp-content/uploads/2017/10/react-native-workshop.jpg'
    };
    return (
      // 
      <View style={{alignItems: "center", fontSize: 22}}>
        <Image source={pic} style={{width: 300, height: 200, margin: 4}}/>
        <Greeting name="chandio" />
        <Greeting name="Sam" />
        <Blink text="This one blinks!!" />
      </View>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: "center", fontSize: 22}}>
        <Text style={{fontSize: 24, color: 'red'}}>Hello {this.props.name}! </Text>
      </View>
    );
  }
}

class Blink extends Component {

  constructor(props) {
    super(props);

    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    }, 1000);
  }

  render() {

    if (!this.state.isShowingText) {
      return null
    }

    return (
      <Text style={{color: '#387EF5', fontSize: 34}}>{this.props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  developer: {
    fontSize: 22,
    color: '#387EF5'
  }
});
