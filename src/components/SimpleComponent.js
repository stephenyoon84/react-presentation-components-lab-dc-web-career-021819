// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = event => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({mood: newMood})
    // if (this.state.mood === 'happy'){
    //   this.setState({mood: 'sad'})
    // } else {
    //   this.setState({mood: 'happy'})
    // }
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
