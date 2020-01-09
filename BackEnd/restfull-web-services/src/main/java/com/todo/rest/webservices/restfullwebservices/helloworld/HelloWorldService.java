package com.todo.rest.webservices.restfullwebservices.helloworld;

import org.springframework.stereotype.Service;


public class HelloWorldService {

    private String something;

    public HelloWorldService(String something){
        this.something = something;
    }

    public String getSomething() {
        return something;
    }

    public void setSomething(String something) {
        this.something = something;
    }
}
