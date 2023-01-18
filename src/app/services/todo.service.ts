import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itodo } from '../modules/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

private  mock : Itodo[] = [
  {"title":"Cat, toddy","description":"Paradoxurus hermaphroditus","isCompleted":true,"isArchived":false,"endDate":"9/22/2022"},
  {"title":"Civet cat","description":"Bassariscus astutus","isCompleted":true,"isArchived":true,"endDate":"5/1/2022"},
  {"title":"Trumpeter, green-winged","description":"Psophia viridis","isCompleted":true,"isArchived":false,"endDate":"10/9/2022"},
  {"title":"Fox, bat-eared","description":"Otocyon megalotis","isCompleted":true,"isArchived":true,"endDate":"10/7/2022"},
  {"title":"Grouse, sage","description":"Centrocercus urophasianus","isCompleted":true,"isArchived":true,"endDate":"5/14/2022"},
  {"title":"Boa, emerald green tree","description":"Boa caninus","isCompleted":true,"isArchived":true,"endDate":"12/15/2022"}
  ];
  
  private _todoSubject: BehaviorSubject<Array<Itodo>> = new BehaviorSubject(this.mock);

  constructor() { };

  public getTodos(): Observable<Array<Itodo>>{
    return this._todoSubject.asObservable();
  }


}
