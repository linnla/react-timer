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
      <div>
        <h1>
          Count down is: {this.state.currentCount}
        </h1>
      </div>
    );
  }

}


export default Timer;