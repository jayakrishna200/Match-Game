import {Component} from 'react'

import './index.css'

const Header = props => {
  const {timeInSeconds} = props
  return (
    <li>
      <p className="time span">{timeInSeconds} sec</p>
    </li>
  )
}

// class Header extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       timeIsSeconds: props.initialTime,
//       stopGameAndShowScorecard: props.stopGameAndShowScorecard,
//       isTimeRunning: props.isTimeRunning,
//     }
//     console.log('contructor()')
//   }

//   clearTimeInterval = timerID => {
//     return clearInterval(this.timerID)
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }
//   componentDidMount() {
//     this.timerID = setInterval(this.tick, 1000)

//     console.log('componentDidMount()')
//   }

//   tick = () => {
//     let {timeIsSeconds, isTimeRunning, stopGameAndShowScorecard} = this.state
//     if (timeIsSeconds === 0 || isTimeRunning === false) {
//       stopGameAndShowScorecard()
//       this.clearTimeInterval()
//     } else {
//       this.setState(prevState => ({timeIsSeconds: prevState.timeIsSeconds - 1}))
//       // console.log('timerId', timerID)
//     }
//   }

//   render() {
//     const {timeIsSeconds} = this.state
//     console.log(timeIsSeconds)
//     console.log('render()')
//     return <p className="time span">{timeIsSeconds} sec</p>
//   }
// }

export default Header
