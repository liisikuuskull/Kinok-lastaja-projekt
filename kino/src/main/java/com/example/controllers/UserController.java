package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.User;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        // Salvestame kasutaja andmebaasi
        userService.saveUser(user);

        // Tagastame eduka registreerimise lehe
        return "registration-success.html"; // See on vaid näide, looge vastav HTML leht
    }
}
