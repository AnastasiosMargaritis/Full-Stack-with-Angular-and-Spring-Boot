import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public done: boolean

    ){

  }
}
@Component({
  selector: 'app-list-to-dos',
  templateUrl: './list-to-dos.component.html',
  styleUrls: ['./list-to-dos.component.css']
})
export class ListToDosComponent implements OnInit {

  todos: Todo[]

  deleteMessage: string

  // todos = [new Todo(1, "Learn to  Dance", new Date(), false)]

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
     this.refreshTodos()
  }

  refreshTodos()
  {
    this.todoDataService.retrieveAllTodos('anasmarg').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id)
  {
    this.todoDataService.deleteTodo('anasmarg', id).subscribe(
      response =>{
          console.log(response);
          this.deleteMessage = `Delete of ${id} Succesfull !!!`
          this.refreshTodos();
      }
    )
  }

  updateTodo(id)
  {
    this.router.navigate(['todos', id]) 
  }

  addTodo()
  {
    this.router.navigate(['todos', -1])
  }

}
