package com.manomitra.server.controller;

import com.manomitra.server.model.UserEntity;
import com.manomitra.server.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @CrossOrigin
    @PostMapping("/register")
    public void registerUser(@RequestBody UserEntity user){
        userService.registerUser(user);
    }
}
