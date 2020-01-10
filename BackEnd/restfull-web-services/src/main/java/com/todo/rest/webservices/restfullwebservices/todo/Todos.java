package com.todo.rest.webservices.restfullwebservices.todo;

import java.util.Date;

public class Todos {

    private long id;
    private String description;
    private Date targetDate;
    private boolean isDone;

    public Todos(){}

    public Todos(long id, String description, Date targetDate, boolean isDone) {
        this.id = id;
        this.description = description;
        this.targetDate = targetDate;
        this.isDone = isDone;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isDone() {
        return isDone;
    }

    public void setDone(boolean done) {
        isDone = done;
    }
}
