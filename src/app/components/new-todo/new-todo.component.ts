import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Itodo } from 'src/app/modules/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @ViewChild('f') form:NgForm;

  constructor(public dialog:MatDialog, private todoService:TodoService){}

  ngOnInit(): void {

  }

  public onNewTodoSubmit():void{
    const formValues = this.form.value
    const newTodo: Itodo = {
      id: uuidv4(),
      title: formValues.title,
      description: formValues.description,
      isCompleted: false,
      isArchived: false,
      endDate: formValues.endDate,
      selected: false
    }
    this.todoService.addNewTodo(newTodo);
    this.dialog.closeAll();

  }
}
