package com.manomitra.server.controller;

import com.manomitra.server.model.TrendingKeywordsEntity;
import com.manomitra.server.repository.TrendingKeywordsRepository;
import com.manomitra.server.service.TrendingKeywordsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TrendingKeywordsController {

    @Autowired
    TrendingKeywordsServiceImpl trendingKeywordsService;

    @GetMapping("/trending-keywords")
    public List<TrendingKeywordsEntity> trendingKeywords(){
        return trendingKeywordsService.trendingKeywords();
    }
}
