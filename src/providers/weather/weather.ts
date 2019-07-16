import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = '2851fb427786e8d68574f2cf0923505c';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'openweathermap.org/';
  }

  getWeather(city, state){
    return this.http.get('https://api.'+this.url+'/data/2.5/weather?q='+city+','+state+'&units=metric&APPID='+this.apiKey).
    map(res => res.json());
  }

}
// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2851fb427786e8d68574f2cf0923505c
