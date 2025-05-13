package com.manomitra.server.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class News {
    private String status;
    private int totalResults;
    private List<NewsArticle> articles;
}
