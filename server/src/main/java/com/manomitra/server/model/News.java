package com.manomitra.server.model;

import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class News {
    private String status;
    private int totalResults;
    private List<NewsArticle> articles;
}
