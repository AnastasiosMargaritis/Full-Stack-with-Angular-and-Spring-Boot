package com.todo.rest.webservices.restfullwebservices.helloworld;

import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping("/hello-world")
    public String helloWorld()
    {
        return "Hello World";
    }

    @GetMapping("/hello-world-bean")
    public HelloWorldService helloWorldService()
    {
        return new HelloWorldService("Hello World");
    }

    @GetMapping("/hello-world/variable/{name}")
    public HelloWorldService helloWorldService(@PathVariable String name)
    {
        return new HelloWorldService(name);
    }
}
