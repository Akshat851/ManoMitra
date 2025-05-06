package com.manomitra.server.controller;

import com.manomitra.server.model.KeywordsEntity;
import com.manomitra.server.service.KeywordsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KeywordsController {

    @Autowired
    KeywordsServiceImpl trendingKeywordsService;

    @CrossOrigin
    @GetMapping("/trending-keywords")
    public List<KeywordsEntity> trendingKeywords(){
        return trendingKeywordsService.trendingKeywords();
    }
}
