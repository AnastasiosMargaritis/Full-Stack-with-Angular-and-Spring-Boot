import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-to-dos/list-to-dos.component';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  
  retrieveAllTodos(username)
  {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todo`)
  }

  deleteTodo(username, id)
  {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
}
