import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from './../services.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Idea } from '../ideapool/idea';
import { take, tap, map, delay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IdeaDetails {
  id: number;
  client_ID: number;
  idea_name: string;
  idea_category: string;
  idea_description: string;
}
export interface IdeaPayload {
  id: number;
  client_ID: number;
  idea_name: string;
  idea_category: string;
  idea_description: string;
}
export interface ConfirmedPro {
  id: number;
  developer_ID: number;
  client_ID: number;
  idea_ID: number;
  category: string;
  isCompleted: boolean;
  }

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

  // getIdea( id: string) {
  //   return this.ideas.pipe(take(1), map(ideas => {
  //     return {...ideas.find(p => p.id === id)};
  //   })
  //   );
  // }

  addIdea(uId, idea) {
    return this.http.post(environment.url + '/addidea/' + uId, idea).pipe(map((res:any) => res));;
}

  viewIdea(uId) {
  return this.http.get(environment.url + '/viewidea/' + uId).pipe(map((res:any) => res));
}

updateIdeaup(iId, vote) {
  return this.http.put(environment.url + '/updateideaup/' + iId, vote).pipe(map((res:any) => res));
}

updateIdeadown(iId, vote) {
  return this.http.put(environment.url + '/updateideadown/' + iId, vote).pipe(map((res:any) => res));
}

categoryView(category) {
  return this.http.get(environment.url + '/categoryview/' + category ).pipe(map((res:any) => res));
}

viewIdeaById(iId) {
  return this.http.get(environment.url + '/viewideabyid/' + iId).pipe(map((res:any) => res));
}

editIdea(iId, idea) {
  return this.http.put(environment.url + '/editidea/' + iId, idea).pipe(map((res:any) => res));
}


deleteIdea(iId) {
  return this.http.delete(environment.url + '/deleteidea/' + iId).pipe(map((res:any) => res));
}

viewAllUsers(role) {
  return this.http.get(environment.url + '/viewAllUsers/' + role).pipe(map((res:any) => res));
}

// ideas = new EventEmitter<string>()


    // this._ideas.pipe(take(1), delay(1000), tap(ideas => {
    //   setTimeout( () => {
    //     this._ideas.next(ideas.concat(newIdea));
    //   }, 3000);
    // }));
    // this._ideas.push(newIdea);


public Confirmedidea(details: ConfirmedPro): Observable<any> {
  return this.http.post(`/users/idea/acceptPro`, details);
}
}

