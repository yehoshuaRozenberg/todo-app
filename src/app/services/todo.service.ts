import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itodo } from '../modules/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

private  todos: Itodo[] = [];
  
  private _todoSubject: BehaviorSubject<Array<Itodo>> = new BehaviorSubject(this.todos);

  private _singleTodoSunject: BehaviorSubject<Itodo> = new BehaviorSubject(
   this.todos.length? this.todos[0]:null);
  constructor() { };

  public getTodos(): Observable<Array<Itodo>>{
    return this._todoSubject.asObservable();
  }

  // public setTodos(todo:Itodo){
  //   this.todos.push(todo);
  // }

  public getSelectedTodo(): Observable<Itodo>{
    return this._singleTodoSunject.asObservable();
  }

  public setSelectedTodo(todo: Itodo): void{
    this._singleTodoSunject.value.selected = false;
    this._singleTodoSunject.next(todo);
}

public addNewTodo(todo: Itodo):void{
  console.log(todo);
  const existingTodos = this._todoSubject.value;
  existingTodos.push(todo);
  this._todoSubject.next(existingTodos);
}

}