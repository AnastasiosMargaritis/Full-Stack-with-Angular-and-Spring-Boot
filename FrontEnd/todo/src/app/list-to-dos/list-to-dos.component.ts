import { Component, OnInit } from '@angular/core';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public isDone: boolean,
    public date: Date
  ){

  }
}
@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {


  todos = [
    new Todo(1, 'wanna fuck', false, new Date()),
    new Todo(2, 'wanna suck', true, new Date()),
    new Todo(3, 'wana duck', false, new Date())
  ]
 

  constructor() { }

  ngOnInit() {
  }

}
