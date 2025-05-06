package com.manomitra.server.repository;

import com.manomitra.server.model.KeywordsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeywordsRepository extends JpaRepository<KeywordsEntity,Long> {
}
