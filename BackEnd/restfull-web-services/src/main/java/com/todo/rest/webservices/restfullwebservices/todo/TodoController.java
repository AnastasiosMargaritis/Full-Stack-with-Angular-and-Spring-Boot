package com.todo.rest.webservices.restfullwebservices.todo;

import com.sun.jndi.toolkit.url.Uri;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @GetMapping("/users/{username}/todos/{id}")
    public Todos getTodo(@PathVariable String username, @PathVariable Long id)
    {
        return todoService.findById(id);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todos todo)
    {
        Todos createdUpdated = todoService.save(todo);
         URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdUpdated.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todos> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todos todo)
    {
        Todos todoUpdated = todoService.save(todo);
        return  new ResponseEntity<Todos>(todo, HttpStatus.OK);
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
