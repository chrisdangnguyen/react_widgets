import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: null
    }

   this.pollWeather = this.pollWeather.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.pollWeather)
  }

  pollWeather(location) {
    //get location coordiantes and break up to lat and long
    const crd = location.coords;
    const lat = encodeURIComponent(crd.latitude);
    const lon = encodeURIComponent(crd.longitude);
    const apiKey = '6aa6a398fa5f6f43437ec77e71c777c9'
    //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
    //combine all values to equate to the provided api link
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
    url += `&appid=${apiKey}`;

    // let opt = { method: 'GET', headers: {}}
    fetch(url).then(function(response) {
      // console.log(response.json());
      return response.json() //make sure to return the response json 
    })
    .then(body => {
      this.setState({weather: body})
      // console.log(this.state)
    })
    // const xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange =  () => {
    //   if (xmlhttp.readyState == XMLHttpRequest.DONE) { 
    //     if (xmlhttp.status == 200) {
    //       const data = JSON.parse(xmlhttp.responseText);
    //       // console.log(data)
    //       this.setState({ weather: data });
    //     }
    //   }
    // };
    // xmlhttp.open("GET", url, true);
    // xmlhttp.send();
  }


  render() {
    let content;

    if (this.state.weather) {
      const weather = this.state.weather;
      const description = weather.weather[0].description;
      const temp = ((weather.main.temp - 273.15) * (9 / 5) + 32).toFixed(2);
      content = 
        <div className="weather">
          <p>{weather.name}</p>
          <p>{temp} deg F</p>
          <p>{description}</p>
        </div>
    } else {
      content = 
        <div className="load-weather">
          loading weather...
        </div>
    }

    return (
      <div className="weather-container">
        <h1>Weather Near You</h1>
        {content}
      </div>
    )
  }
}

export default Weather;