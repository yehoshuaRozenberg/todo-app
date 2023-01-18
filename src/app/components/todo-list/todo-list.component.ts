import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Itodo } from 'src/app/modules/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy{

  public todos : Array<Itodo> = [];
  private subscription: Subscription = new Subscription();

constructor(private todoService: TodoService){}
  

ngOnInit():void{
  this.subscription.add(
    this.todoService.getTodos().subscribe(data =>{
      this.todos = data;
    })
  )
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }
}
