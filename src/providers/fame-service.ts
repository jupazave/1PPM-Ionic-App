import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FameService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
    */
@Injectable()
export class FameService {

    private apiUrl = 'https://raw.githubusercontent.com/1ppm/1ppmLog/master/api/HallOfFame.json';  // URL to web api
    private people: any = undefined;

    constructor(public http: Http) {
    }

    load() {
        if (this.people) {
            // already loaded data
            return Promise.resolve(this.people);
        }

        // don't have the data yet
        return new Promise(resolve => {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            this.http.get(this.apiUrl)
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.people = data;
                    resolve(this.people);
                });
        });
    }

}
