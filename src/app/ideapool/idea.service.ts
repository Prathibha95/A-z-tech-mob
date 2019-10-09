import { Injectable } from '@angular/core';
import { Idea } from '../ideapool/idea';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {
// tslint:disable-next-line: variable-name
private _ideas: Idea[] = [
new Idea(
   'i1',
   'Agriculure',
   'My innovative idea is to publish a new machine for the havesting process which is powered by the solar power.',
   new Date('2019-10-03'),
),
new Idea(
  'i2',
  'Software',
  'My innovative idea is to publish a new machine for the havesting process which is powered by the solar power.',
  new Date('2019-10-04'),
),
new Idea(
  'i3',
  'Agriculture',
  'My innovative idea is to publish a new machine for the havesting process which is powered by the solar power.',
  new Date('2019-10-04'),
),
];
get ideas() {
  return  [...this._ideas];
}
  constructor() { }

  getIdea( id: string) {
    return {...this._ideas.find(p => p.id === id)};
  }
}

