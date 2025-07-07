package com.manomitra.server.service;

import com.manomitra.server.model.UserEntity;
import org.springframework.http.ResponseEntity;

public interface UserService {

    ResponseEntity<?> registerUser(UserEntity user);

    ResponseEntity<?> loginUser(UserEntity user);

    UserEntity validateUser(String authHeader);
}
