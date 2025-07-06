package com.manomitra.server.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "chat")
public class ChatMessageEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String sender;
    private String senderEmail;
    @Column(columnDefinition = "TEXT")
    private String content;
    private LocalDateTime timestamp;
}

