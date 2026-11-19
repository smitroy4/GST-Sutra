package com.smit.GST_Sutra.controller;

import com.smit.GST_Sutra.dto.ChatRequest;
import com.smit.GST_Sutra.dto.ChatResponse;
import com.smit.GST_Sutra.service.ChatService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    @PostMapping
    public ResponseEntity<ChatResponse> chat(
            @Valid @RequestBody ChatRequest request) {

        ChatResponse response = chatService.chat(request.question());

        return ResponseEntity.ok(response);
    }
}