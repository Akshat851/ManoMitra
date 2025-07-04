package com.manomitra.server.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue
    private long id;
    private String name;

    @Column(unique = true)
    private String email;
    private boolean isDoctor;
    private int yoe;
    private String degree;
    private String password;
}
