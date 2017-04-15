import React, {Component} from 'react'
import {View} from 'react-native'
import {styles} from './GridButton.style'

export class GridButton extends Component {

  update = () => {
    console.log('tick')
  }

  componentDidMount() {
    console.log(this.context) //.loop.subscribe(this.update)
  }

  componentWillUnmount() {
  //  this.context.loop.unsubscribe(this.update)
  }

  render() {
    return (
      <View />
    )
  }
}
