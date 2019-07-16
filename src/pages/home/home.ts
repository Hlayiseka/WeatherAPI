import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    
})
export class HomePage {
  
  weather:any;
  cityname:any;
  icon:any;
  wind:any;
  winddeg:any;
  description:any;
  temp:any;
  humidity:any;
  windgust:any;
  country:any;
  timezone:any;

   getWeathers(city, state){
    this.weatherProvider.getWeather(city, state)
    .subscribe(weather => {
    this.weather = weather.clouds.all;
    this.clouds = weather.clouds.all;
    this.cityname = weather.name;
    this.wind = weather.wind.speed;
    this.winddeg = weather.wind.deg;
    this.description = weather.weather[0].description;
    this.temp = weather.main.temp;
    this.humidity = weather.main.humidity;
    // this.windgust = weather.wind.gust;
    this.country = weather.sys.country;
    this.icon = weather.weather[0].icon+'.png';
    this.timezone = weather.timezone;
    console.log(weather);
    });
   }
  clouds:any;
  
  location:{
    city:string,
    state:string
  }

  constructor(
    public navCtrl: NavController, 
    private weatherProvider:WeatherProvider,
    private storage:Storage) {
    
  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if (val != null){
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'johannesburg',
          state: 'ZA'
        }
      }
      this.weatherProvider.getWeather(this.location.city, this.location.state)
      .subscribe(weather => {
      this.weather = weather.clouds.all;
      this.clouds = weather.clouds.all;
      this.cityname = weather.name;
      this.wind = weather.wind.speed;
      this.winddeg = weather.wind.deg;
      this.description = weather.weather[0].description;
      this.temp = weather.main.temp;
      this.humidity = weather.main.humidity;
      this.icon = weather.weather[0].icon+'.png';
      // this.windgust = weather.wind.gust;
      this.country = weather.sys.country;
      this.timezone = weather.timezone;
      console.log(this.icon);
      });
    });



  

  }

}
