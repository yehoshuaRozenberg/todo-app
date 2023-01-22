import { Input } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Itodo } from 'src/app/modules/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{

private _todo:Itodo;

 @Input() set todo( todo: Itodo){
this._todo = todo;
 }

 public getTodo():Itodo{
return this._todo;
 }

constructor(){}

ngOnInit():void{
  
}

  public onCompletedTodo():void{
    this._todo.isCompleted = true;
  }

  public onArchivedTodo():void{
    this._todo.isArchived = true;
  }

}
