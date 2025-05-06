package com.manomitra.server.service;

import com.manomitra.server.model.KeywordsEntity;
import com.manomitra.server.repository.KeywordsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KeywordsServiceImpl implements KeywordsService {

    @Autowired
    KeywordsRepository keywordsRepository;

    @Override
    public List<KeywordsEntity> trendingKeywords() {
        return keywordsRepository.findAll();
    }
}
