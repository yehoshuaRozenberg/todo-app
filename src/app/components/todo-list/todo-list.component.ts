import { Input } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Itodo } from 'src/app/modules/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Array<Itodo> = [];

  constructor(private todoService: TodoService) { }


  ngOnInit(): void {

  }



  public onTodoClick(todo: Itodo, index: number): void {
    this.todoService.setSelectedTodo(todo);
    this.todos.forEach((todo) => {
      if (todo.selected) {
        todo.selected = false;
      }
    })
    this.todos[index].selected = true;
  }
}
