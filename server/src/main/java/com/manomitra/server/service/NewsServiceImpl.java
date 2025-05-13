package com.manomitra.server.service;
import com.manomitra.server.model.News;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

//store api config in properties file
//proper error handling
@Service
public class NewsServiceImpl implements NewsService{
    public News news() {
        String url = "https://newsapi.org/v2/top-headlines?category=health&apiKey=3336f9b168b7463a88079758c778734e";
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url,News.class);
    }
}
