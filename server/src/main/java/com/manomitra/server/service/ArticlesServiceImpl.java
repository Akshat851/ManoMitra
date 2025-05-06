package com.manomitra.server.service;

import com.manomitra.server.model.ArticlesEntity;
import com.manomitra.server.repository.ArticlesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticlesServiceImpl implements ArticlesService{
    @Autowired
    ArticlesRepository articlesRepository;

    @Override
    public List<ArticlesEntity> articles() {
        return articlesRepository.findAll();
    }
}
