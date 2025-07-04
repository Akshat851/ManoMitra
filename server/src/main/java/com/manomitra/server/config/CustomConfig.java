package com.manomitra.server.config;

import lombok.*;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "custom-config")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
public class CustomConfig {
    private String newsApiUrl;
    private String jwtSecretKey;
}
