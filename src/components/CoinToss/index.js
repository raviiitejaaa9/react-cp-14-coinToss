// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    activeTossResult: 0,
    count: 0,
    heads: 0,
    tails: 0,
  }

  onCoinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({activeTossResult: tossResult})
      this.setState(prevState => ({count: prevState.count + 1}))
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({activeTossResult: tossResult})
      this.setState(prevState => ({count: prevState.count + 1}))
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
    console.log(tossResult)
    return tossResult
  }

  render() {
    const {heads, tails, count, activeTossResult} = this.state

    let imageEl
    if (activeTossResult === 0) {
      imageEl = (
        <img
          className="coin-image"
          alt="toss result"
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
        />
      )
    } else {
      imageEl = (
        <img
          className="coin-image"
          src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
          alt="toss result"
        />
      )
    }

    return (
      <div className="app-container">
        <div className="card">
          <h1> Coin Toss Game </h1>
          <p> Heads (or) Tails</p>
          {imageEl}
          <button type="button" className="button" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <div className="list">
            <p className="para"> Total: {count} </p>
            <p className="para"> Heads: {heads}</p>
            <p className="para"> Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
