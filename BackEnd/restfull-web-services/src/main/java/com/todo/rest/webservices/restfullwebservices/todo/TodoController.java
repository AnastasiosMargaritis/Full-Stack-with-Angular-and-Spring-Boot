package com.todo.rest.webservices.restfullwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/users/{username}/todo")
    public List<Todos> getAllTodos(@PathVariable String username)
    {
       return todoService.findAll();
    }

   

    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id)
    {
        Todos todo = todoService.deleteById(id);
        if(todo != null)
        {
           return  ResponseEntity.noContent().build();
        }

        return  ResponseEntity.notFound().build();
    }
}
