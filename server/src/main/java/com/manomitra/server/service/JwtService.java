package com.manomitra.server.service;

import com.manomitra.server.config.CustomConfig;
import com.manomitra.server.model.UserEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {

    @Autowired
    private CustomConfig customConfig;

    public String getToken(UserEntity user) {
        return Jwts
                .builder()
                .subject(user.getEmail())
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

    public String extractUsernameAndValidateToken(String token) {
        Claims claims = extractClaims(token);
        if (claims.getExpiration().before(new Date(System.currentTimeMillis()))){
            return null;
        }
        return claims.getSubject();
    }
}
