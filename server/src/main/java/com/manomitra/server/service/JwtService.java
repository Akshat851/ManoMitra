package com.manomitra.server.service;

import com.manomitra.server.config.CustomConfig;
import com.manomitra.server.model.UserEntity;
import com.manomitra.server.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Objects;
import java.util.Optional;

@Service
public class JwtService {

    @Autowired
    private CustomConfig customConfig;

    @Autowired
    private UserRepository userRepository;

    public String getToken(UserEntity user) {

        UserEntity userEntity = userRepository.findByEmail(user.getEmail()).orElse(null);
        String name = "";
        if (!Objects.isNull(userEntity)){
            name = userEntity.getName();
        }

        return Jwts
                .builder()
                .subject(user.getEmail())
                .claim("name", name)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 15*60*1000))
                .signWith(Keys.hmacShaKeyFor(customConfig.getJwtSecretKey().getBytes(StandardCharsets.UTF_8)))
                .compact();
    }

    public Claims extractClaims(String token) {
        return Jwts
                .parser()
                .verifyWith(Keys.hmacShaKeyFor(customConfig.getJwtSecretKey().getBytes(StandardCharsets.UTF_8)))
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public UserEntity extractUsernameAndValidateToken(String token) {
        Claims claims = extractClaims(token);
        if (claims.getExpiration().before(new Date(System.currentTimeMillis()))){
            return null;
        }
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(claims.getSubject());
        userEntity.setName(claims.get("name",String.class));
        return userEntity;
    }
}
