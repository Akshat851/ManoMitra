package com.manomitra.server.repository;

import com.manomitra.server.model.TrendingKeywordsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrendingKeywordsRepository extends JpaRepository<TrendingKeywordsEntity,Long> {
}
