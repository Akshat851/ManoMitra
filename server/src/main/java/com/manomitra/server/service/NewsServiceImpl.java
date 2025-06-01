package com.manomitra.server.service;
import com.manomitra.server.config.NewsServiceConfig;
import com.manomitra.server.model.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class NewsServiceImpl implements NewsService{

    @Autowired
    private NewsServiceConfig newsServiceConfig;

    public News news() {
        String url = newsServiceConfig.getUrl();
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url,News.class);
    }
}
