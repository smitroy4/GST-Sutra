package com.smit.GST_Sutra.service;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.document.Document;
import org.springframework.ai.transformer.splitter.TokenTextSplitter;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class IngestionService {

    private final DocumentLoaderService documentLoaderService;
    private final VectorStore vectorStore;

    public int ingestDocuments() throws IOException {

        // 1. Load Markdown documents
        List<Document> documents =
                documentLoaderService.loadDocuments();

        if (documents.isEmpty()) {
            return 0;
        }

        // 2. Split documents into smaller chunks
        TokenTextSplitter splitter = TokenTextSplitter.builder()
                .withChunkSize(800)
                .build();

        List<Document> chunks = splitter.apply(documents);

        // 3. Generate embeddings and store chunks in Pinecone
        vectorStore.add(chunks);

        return chunks.size();
    }
}
