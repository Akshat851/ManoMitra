package com.manomitra.server.controller;

import com.manomitra.server.model.ArticlesEntity;
import com.manomitra.server.service.ArticlesServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArticlesController {
    @Autowired
    ArticlesServiceImpl articlesService;

    @CrossOrigin
    @GetMapping(path = "/articles")
    public List<ArticlesEntity> articles(){
        return articlesService.articles();
    }
}
