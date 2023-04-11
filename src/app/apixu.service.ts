import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location: any){
    return this.http.get(
      'http://dataservice.accuweather.com/forecasts/v1/daily/10day/{locationKey}' + location
    );
}
}
