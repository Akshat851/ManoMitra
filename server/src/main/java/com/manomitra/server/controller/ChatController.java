package com.manomitra.server.controller;

import com.manomitra.server.model.ChatMessageEntity;
import com.manomitra.server.repository.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Controller
public class ChatController {

    @Autowired
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    @MessageMapping("/send")
    public void sendMessage(@Payload ChatMessageEntity message, @Header("simpSessionAttributes") Map<String, Object> attrs) {
        String name = (String) attrs.get("name");
        String email = (String) attrs.get("email");
        message.setSender(name);
        message.setSenderEmail(email);
        message.setTimestamp(LocalDateTime.now());
        ChatMessageEntity saved = chatMessageRepository.save(message);

        messagingTemplate.convertAndSend("/topic/messages", saved);
    }

    @GetMapping("/api/chat/history")
    public ResponseEntity<List<ChatMessageEntity>> getChatHistory() {
        List<ChatMessageEntity> messages = chatMessageRepository.findTop50ByOrderByTimestampDesc();
        Collections.reverse(messages);
        return ResponseEntity.ok(messages);
    }
}

