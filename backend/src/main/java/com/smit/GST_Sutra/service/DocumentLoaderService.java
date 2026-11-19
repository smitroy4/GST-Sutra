package com.smit.GST_Sutra.service;

import lombok.RequiredArgsConstructor;
import org.springframework.ai.document.Document;
import org.springframework.ai.reader.markdown.MarkdownDocumentReader;
import org.springframework.ai.reader.markdown.config.MarkdownDocumentReaderConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DocumentLoaderService {

    private final ResourcePatternResolver resourceResolver;

    @Value("${gst.docs.location}")
    private String docsLocation;

    public List<Document> loadDocuments() {

        List<Document> documents = new ArrayList<>();

        try {
            // 1. Find all Markdown files
            Resource[] resources =
                    resourceResolver.getResources(docsLocation);

            // 2. Read each Markdown file
            for (Resource resource : resources) {

                String fileName = resource.getFilename();

                // 3. Configure document metadata
                MarkdownDocumentReaderConfig config =
                        MarkdownDocumentReaderConfig.builder()
                                .withAdditionalMetadata("filename", fileName)
                                .build();

                // 4. Extract documents
                MarkdownDocumentReader reader =
                        new MarkdownDocumentReader(resource, config);

                documents.addAll(reader.get());
            }

        } catch (IOException exception) {
            throw new RuntimeException(
                    "Failed to load GST Markdown documents", exception
            );
        }

        if (documents.isEmpty()) {
            throw new IllegalStateException(
                    "No GST documents found at: " + docsLocation
            );
        }

        return documents;
    }
}