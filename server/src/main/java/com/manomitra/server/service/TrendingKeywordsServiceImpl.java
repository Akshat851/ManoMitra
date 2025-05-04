package com.manomitra.server.service;

import com.manomitra.server.model.TrendingKeywordsEntity;
import com.manomitra.server.repository.TrendingKeywordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrendingKeywordsServiceImpl implements TrendingKeywordsService{

    @Autowired
    TrendingKeywordsRepository trendingKeywordsRepository;

    @Override
    public List<TrendingKeywordsEntity> trendingKeywords() {
        return trendingKeywordsRepository.findAll();
    }
}
