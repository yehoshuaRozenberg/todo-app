import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Itodo } from '../modules/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Itodo[] = [];

  private _todoSubject: BehaviorSubject<Array<Itodo>> = new BehaviorSubject(this.todos);

  private _singleTodoSunject: BehaviorSubject<Itodo> = new BehaviorSubject(
    this.todos.length ? this.todos[0] : null);
  constructor() { };

  public getTodos(): Observable<Array<Itodo>> {
    if (!this._todoSubject.value.length) {
      const todoString = localStorage.getItem("todos");
      if (todoString) {
        const existingTodos = JSON.parse(todoString);
        this._todoSubject.next(existingTodos);
      }
    }
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<Itodo> {
    return this._singleTodoSunject.asObservable();
  }

  public setSelectedTodo(todo: Itodo): void {
    this._singleTodoSunject.next(todo);
  }

  public addNewTodo(todo: Itodo): void {
    console.log(todo);
    const existingTodos = this._todoSubject.value;
    existingTodos.push(todo);
    this._todoSubject.next(existingTodos);
    localStorage.setItem("todos", JSON.stringify(existingTodos))
  }

  public onTodoAction(todoId: string, action: string): void {
    const existingTodos: Array<Itodo> = this._todoSubject.value;
    const todoIndex = existingTodos.findIndex((singleTodo) => singleTodo.id = todoId);
    existingTodos[todoIndex][action] = true;
    this._todoSubject.next(existingTodos);
    localStorage.setItem("todos", JSON.stringify(existingTodos));
  }
}