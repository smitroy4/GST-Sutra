package com.smit.GST_Sutra.controller;

import com.smit.GST_Sutra.service.IngestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/ingest")
@RequiredArgsConstructor
public class IngestController {

    private final IngestionService ingestionService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> ingest() throws IOException {

        int totalChunks = ingestionService.ingestDocuments();

        return ResponseEntity.ok(
                Map.of(
                        "message", "Documents ingested successfully",
                        "totalChunks", totalChunks
                )
        );
    }
}

