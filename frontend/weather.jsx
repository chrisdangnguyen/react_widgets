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
    const lat = crd.latitude;
    const lon = crd.longitude;
    const apiKey = '6aa6a398fa5f6f43437ec77e71c777c9'
    //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
    //combine all values to equate to the provided api link
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
    url += `&appid=${apiKey}`;


    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange =  () => {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) { 
        if (xmlhttp.status == 200) {
          console.log(xmlhttp.responseText)
          const data = JSON.parse(xmlhttp.responseText);
          console.log(data)
          this.setState = {
            weather: data
          }
          console.log(this.setState)
        }
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }


  render() {
    return (
      null
    )
  }
}

export default Weather;