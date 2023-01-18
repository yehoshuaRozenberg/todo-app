import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Itodo } from 'src/app/modules/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy{

  public todo: Itodo;
private subscription: Subscription = new Subscription();

constructor(private todoService: TodoService){}

ngOnInit():void{
  this.subscription.add(
    this.todoService.getSelectedTodo().subscribe(data =>{
      this.todo = data;
    })
  )
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
  }

  // public onCompletedTodo(todo: Itodo):void{
  //   todo.isCompleted = true;
  // }

  public onCompletedTodo():void{
    this.todo.isCompleted = true;
  }

  public onArchivedTodo():void{
    this.todo.isArchived = true;
  }

}
