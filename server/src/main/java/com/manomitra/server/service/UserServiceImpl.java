package com.manomitra.server.service;

import com.manomitra.server.model.UserEntity;
import com.manomitra.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Objects;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder encoder;
    
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Override
    public void registerUser(UserEntity user) {
        UserEntity userFromDb = userRepository.findByEmail(user.getEmail()).orElse(null);
        if (!Objects.isNull(userFromDb)){
            throw new RuntimeException("User Already Exists");
        }
        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public ResponseEntity<?> loginUser(UserEntity user){
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        if(authenticate.isAuthenticated()){
            String token = jwtService.getToken(user);
            return ResponseEntity.ok(Collections.singletonMap("access_token", token));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }
}
