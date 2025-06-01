package com.manomitra.server.config;

import lombok.*;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@ConfigurationProperties(prefix = "news-service-config")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component
public class NewsServiceConfig {
    private String url;
}
