package com.smit.GST_Sutra;

import com.smit.GST_Sutra.service.RetrievalService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EmbeddingIntegrationTest {

    @Autowired
    private RetrievalService retrievalService;

    @Test
    void shouldGenerateEmbedding() {

        retrievalService.retrieveDocuments(
                "What is GST registration?"
        );
    }
}
