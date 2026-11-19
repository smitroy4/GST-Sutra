
package com.smit.GST_Sutra.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class RetrievalService {

    private final VectorStore vectorStore;

    public List<Document> retrieveDocuments(String question) {

        SearchRequest searchRequest = SearchRequest.builder()
                .query(question)
                .topK(4)
                .build();

        List<Document> documents = vectorStore.similaritySearch(searchRequest);

        log.info("Retrieved {} documents for question: {}",
                documents.size(), question);

        documents.forEach(document -> {
            log.info("Source: {}", document.getMetadata().get("file_name"));
            log.debug("Retrieved content: {}", document.getText());
        });

        return documents;
    }
}
