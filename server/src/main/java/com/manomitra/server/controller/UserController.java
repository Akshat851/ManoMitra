package com.manomitra.server.controller;

import com.manomitra.server.model.UserEntity;
import com.manomitra.server.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @GetMapping("/validate-token")
    public UserEntity validateUser(@RequestHeader("Authorization") String authHeader) {
        return userService.validateUser(authHeader);
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserEntity user) {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserEntity user) {
        return userService.loginUser(user);
    }
}
