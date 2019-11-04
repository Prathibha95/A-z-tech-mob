import { ServicesService } from './../services.service';
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
];
get ideas() {
  return  [...this._ideas];
}
  constructor(private servicesService: ServicesService) { }

  getIdea( id: string) {
    return {...this._ideas.find(p => p.id === id)};
  }

  addIdea(title: string, description: string, publishdate: Date, uderId: string ) {
    const newIdea = new Idea(Math.random().toString(),
    title,
    description,
    publishdate,
    this.servicesService.userId
    );
    this._ideas.push(newIdea);

  }
}

