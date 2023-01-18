import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itodo } from '../modules/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

private  mock : Itodo[] = [
  {id:1,"title":"Cat, toddy","description":"Paradoxurus hermaphroditus","isCompleted":false,"isArchived":false,"endDate":"9/22/2022", selected: true},
  {id:2,"title":"Civet cat","description":"Bassariscus astutus","isCompleted":false,"isArchived":false,"endDate":"5/1/2022",  selected: false},
  {id:3,"title":"Trumpeter, green-winged","description":"Psophia viridis","isCompleted":false,"isArchived":false,"endDate":"10/9/2022" ,selected: false},
  {id:4,"title":"Fox, bat-eared","description":"Otocyon megalotis","isCompleted":false,"isArchived":false,"endDate":"10/7/2022" ,selected: false},
  {id:5,"title":"Grouse, sage","description":"Centrocercus urophasianus","isCompleted":false,"isArchived":false,"endDate":"5/14/2022" ,selected: false},
  {id:6,"title":"Boa, emerald green tree","description":"Boa caninus","isCompleted":false,"isArchived":false,"endDate":"12/15/2022" ,selected: false}
  ];
  
  private _todoSubject: BehaviorSubject<Array<Itodo>> = new BehaviorSubject(this.mock);

  private _singleTodoSunject: BehaviorSubject<Itodo> = new BehaviorSubject(this.mock[0]);
  constructor() { };

  public getTodos(): Observable<Array<Itodo>>{
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<Itodo>{
    return this._singleTodoSunject.asObservable();
  }

  public setSelectedTodo(todo: Itodo): void{
    this._singleTodoSunject.value.selected = false;
    this._singleTodoSunject.next(todo);
}
}