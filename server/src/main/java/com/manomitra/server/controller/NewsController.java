package com.manomitra.server.controller;

import com.manomitra.server.model.News;
import com.manomitra.server.service.NewsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NewsController {
    @Autowired
    private NewsServiceImpl newsService;

    @GetMapping("/news")
    public News news(){
        return newsService.news();
    }
}
