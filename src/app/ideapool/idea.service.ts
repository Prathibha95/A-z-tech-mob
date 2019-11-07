import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './../services.service';
import { Injectable } from '@angular/core';
import { Idea } from '../ideapool/idea';
import { take, tap, map, delay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
// tslint:disable-next-line: variable-name
private _ideas = new BehaviorSubject<Idea[]>([
  new Idea(
    'i1',
    'Agriculure',
    'My innovative idea is to publish a new machine for the havesting process which is powered by the solar power.',
    new Date('2019-10-03'),
    'prathibha'
 ),
 new Idea(
   'i2',
   'Software',
   'My innovative idea is to publish a new machine for the havesting process which is powered by the solar power.',
   new Date('2019-10-04'),
   'prathibha'
 ),
 new Idea(
   'i3',
   'Agriculture',
   'My innovative idea is to publish a new machine for the havesting process which is powered by the solar power.',
   new Date('2019-10-04'),
   'prathibha'
 ),
 ]);
get ideas() {
  return  this._ideas.asObservable();
}
  constructor(private servicesService: ServicesService,
              private http: HttpClient ) { }

  getIdea( id: string) {
    return this.ideas.pipe(take(1), map(ideas => {
      return {...ideas.find(p => p.id === id)};
    })
    );
  }

  addIdea(uId, idea) {
    return this.http.post(environment.url + '/addidea/' + uId, idea);
}

  viewIdea(uId){
  return this.http.get(environment.url + '/viewidea/' + uId);
}

    // this._ideas.pipe(take(1), delay(1000), tap(ideas => {
    //   setTimeout( () => {
    //     this._ideas.next(ideas.concat(newIdea));
    //   }, 3000);
    // }));
    // this._ideas.push(newIdea);
}

