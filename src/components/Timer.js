import './Timer.css';
import React from 'react';

class Timer extends React.Component {

  constructor(props){
    super(props);
    this.state = {currentCount: 10}
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount < 1) { 
      this.setState({
        currentCount: 10
      })
    }
  }
  
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  
  render() {
    return (
      <div className="top-container border-red">
        <div className="main-container border-red">
          <div className='ui inverted segment timer-container'>
            <h1 className='ui header'>
              Count down is: {this.state.currentCount}
            </h1>
            <button className='ui primary button massive ui button'>Reset Timer</button>
          </div>
        </div>
      </div>
    );
  }

}


export default Timer;