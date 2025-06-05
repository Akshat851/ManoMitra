package com.manomitra.server.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "articles")
@ToString
public class ArticlesEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String author;
    private String image;
    private String publishedAt;
    private String content;
    private String description;
}
