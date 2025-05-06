package com.manomitra.server.service;

import com.manomitra.server.model.KeywordsEntity;

import java.util.List;

public interface KeywordsService {
    List<KeywordsEntity> trendingKeywords();
}
