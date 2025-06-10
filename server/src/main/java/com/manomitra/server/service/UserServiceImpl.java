package com.manomitra.server.service;

import com.manomitra.server.model.UserEntity;
import com.manomitra.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public void registerUser(UserEntity user) {
        userRepository.save(user);
    }
}
