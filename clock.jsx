import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    let startTime = (new Date()).toString();
    this.state = {time: startTime};
    this.setDate = this.setDate.bind(this);

    setInterval(this.setDate, 1000);
  }

  setDate(){
    let currentTime = (new Date()).toString();
    this.setState({time: currentTime});
  }

  render(){
    return(
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }

}

export default Clock;
