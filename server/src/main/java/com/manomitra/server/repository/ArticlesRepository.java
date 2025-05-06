package com.manomitra.server.repository;

import com.manomitra.server.model.ArticlesEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticlesRepository extends JpaRepository<ArticlesEntity,Long> {
}
