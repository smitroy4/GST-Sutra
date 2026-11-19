package com.smit.GST_Sutra.service;

import org.springframework.ai.document.Document;
import org.springframework.ai.reader.markdown.MarkdownDocumentReader;
import org.springframework.ai.reader.markdown.config.MarkdownDocumentReaderConfig;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class DocumentLoaderService {

    @Value("${gst.docs.location}")
    private String docsLocation;

    public List<Document> loadDocuments() throws IOException {

        List<Document> documents = new ArrayList<>();

        PathMatchingResourcePatternResolver resolver =
                new PathMatchingResourcePatternResolver();

        Resource[] resources = resolver.getResources(docsLocation);

        for (Resource resource : resources) {

            String fileName = resource.getFilename();

            MarkdownDocumentReaderConfig config =
                    MarkdownDocumentReaderConfig.builder()
                            .withAdditionalMetadata("fileName", fileName)
                            .build();

            MarkdownDocumentReader reader =
                    new MarkdownDocumentReader(resource, config);

            List<Document> extractedDocuments = reader.get();

            documents.addAll(extractedDocuments);
        }

        return documents;
    }
}