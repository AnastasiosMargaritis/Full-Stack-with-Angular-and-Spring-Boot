package com.todo.rest.webservices.restfullwebservices.todo;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    private static List<Todos> todos = new ArrayList<>();
    private static int idCounter = 0;

    static{
        todos.add(new Todos(++idCounter,"learn to dance", new Date(), false));
        todos.add(new Todos(++idCounter,"learn to python", new Date(), false));
        todos.add(new Todos(++idCounter,"learn to dive", new Date(), true));
    }

    public List<Todos> findAll()
    {
        return todos;
    }

    public Todos deleteById(long id)
    {
        Todos todo = findById(id);

        if(todo == null) {return null;}

        todos.remove(todo);

        return todo;
    }

    private Todos findById(long id) {
        for(Todos todo: todos)
        {
            if(todo.getId() == id)
            {
                return todo;
            }
        }
        return null;
    }
}
