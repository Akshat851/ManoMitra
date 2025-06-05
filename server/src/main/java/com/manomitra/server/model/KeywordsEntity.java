package com.manomitra.server.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "keywords")
@ToString
public class KeywordsEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String word;
}
