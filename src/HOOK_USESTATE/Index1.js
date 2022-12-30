import React, { Component } from 'react'

export default class HOOK_USESTATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count : 0,
      }
    }

    handleBTN = () =>  {
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    const {count} = this.state
    return (
      <div>
            <h1>count : {count}</h1>
            <button onClick={this.handleBTN} disabled = { count === 10 ? true : false }>incBTN</button>
      </div>
    )
  }
}
