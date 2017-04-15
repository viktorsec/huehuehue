import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Loop, Stage} from 'react-game-kit/native'
import {GridButton} from './Components/GridButton'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class App extends Component {
  render() {
    return (
      <Loop>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Hello.</Text>
        </View>
        <GridButton />
      </Loop>
    )
  }
}
