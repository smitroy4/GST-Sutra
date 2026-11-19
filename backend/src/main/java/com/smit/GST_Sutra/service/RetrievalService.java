package com.smit.GST_Sutra.service;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.document.Document;
import org.springframework.ai.vectorstore.SearchRequest;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RetrievalService {

    private final VectorStore vectorStore;

    public List<Document> retrieveDocuments(String question) {

        SearchRequest searchRequest = SearchRequest.builder()
                .query(question)
                .topK(4)
                .similarityThreshold(0.5)
                .build();

        return vectorStore.similaritySearch(searchRequest);
    }
}