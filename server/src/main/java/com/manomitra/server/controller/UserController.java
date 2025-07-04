package com.manomitra.server.controller;

import com.manomitra.server.model.UserEntity;
import com.manomitra.server.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/register")
    public void registerUser(@RequestBody UserEntity user) {
        userService.registerUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserEntity user) {
        return userService.loginUser(user);
    }
}
