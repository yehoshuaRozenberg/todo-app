import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/modules/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  private _todo: Itodo;

  @Input() set todo(todo: Itodo) {
    this._todo = todo;
  }

  public getTodo(): Itodo {
    return this._todo;
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

  }

  public onCompletedTodo(): void {
    this._todo.isCompleted = true;
    this.todoService.onTodoAction(this._todo.id, 'isCompleted');
  }

  public onArchivedTodo(): void {
    this._todo.isArchived = true;
    this.todoService.onTodoAction(this._todo.id, 'isArchived');
  }

}
