import { Component, OnInit } from '@angular/core';
import {SearchService, ISearchResultItem} from "../../core/services/search.service";
import {Observable} from "rxjs";

@Component({
    selector: 'weather-box',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.css']

})
export class WeatherComponent implements OnInit {
    soquestions: Array<ISearchResultItem>;

    constructor(private sosearch: SearchService) {
        this.soquestions = [];
    }

    ngOnInit() {
        let soobs = this.sosearch.search('weather');
        let weather = this.sosearch.getWeather();

        Observable.zip(soobs, weather).subscribe((response) => {
            // Extract the correct response
            let soquestions: any = response[0];
            let weather: any = response[1];

            for (let i = 0; i < 5; i++) {
                let data: any = {};

                // First the question
                data.type = 'question';
                data.question = soquestions.items[i];
                this.soquestions.push(data);

                // Then the weather
                data = {};
                data.type = 'weather';
                // Get a random weather info
                data.weather = weather[Math.floor(Math.random() * weather.length)];
                this.soquestions.push(data);
            }

            console.log('weather', this.soquestions);
        });
    }
}