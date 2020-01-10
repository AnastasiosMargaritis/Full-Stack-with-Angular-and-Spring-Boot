import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-to-dos/list-to-dos.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number
  todos: Todo

  constructor(
    private service: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.todos = new Todo(this.id,'',new Date(), false);

    if (this.id != -1)
    {
      this.service.retrieveTodoById('anasmarg', this.id)
      .subscribe(
      data => this.todos = data
    )
    }
    
  }

  saveTodo()
  {
    if(this.id === -1)
    {
      this.service.createTodo('anasmarg', this.todos)
      .subscribe(
      data => {
        this.router.navigate(['todos'])
      }
      )
    }else
    {
      this.service.updateTodo('anasmarg', this.id, this.todos)
      .subscribe(
      data => {
        this.router.navigate(['todos'])
      }
      )
    }
    
  }

}
