package com.example.model;

import java.time.LocalDateTime;

public class Session {
    private LocalDateTime startTime;
    private Movie movie;
    private Hall hall;

    public Session(LocalDateTime startTime, Movie movie, Hall hall) {
        this.startTime = startTime;
        this.movie = movie;
        this.hall = hall;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Hall getHall() {
        return hall;
    }

    public void setHall(Hall hall) {
        this.hall = hall;
    }
}

