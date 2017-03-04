import React from 'react';

class Weather extends React.Component{
  constructor(props) {
    super(props);
    this.state = {weather: "", lat: "", long: ""};
    this.handleLocation.bind(this);
  }

  componentDidMount(){
    this.getWheather();
  }

  getWheather(){
    console.log("WEATHER");
    navigator.geolocation.getCurrentPosition((res)=>{
      this.handleLocation(res);
      this.handleWeather();
    });


  }

  handleLocation(res){
    this.setState({ lat: res.coords.latitude});
    this.setState({ long: res.coords.longtitude});
  }

  handleWeather(){
    $.ajax({
      method: "GET",
      url: `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.long}&appid=0bc621e963fc67f0b9f46176a58aaeaf`
    }).then((response) => console.log(response));
  }


  render(){
    return (
      <div>
        <p>{this.state.lat}</p>
        <p>{this.state.long}</p>
      </div>
    );
  }
}

export default Weather;
