package com.smit.GST_Sutra;

import com.smit.GST_Sutra.service.RetrievalService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.vectorstore.VectorStore;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RetrievalServiceTest {

    @Mock
    private VectorStore vectorStore;

    @Mock
    private EmbeddingModel embeddingModel;

    @InjectMocks
    private RetrievalService retrievalService;

    @Test
    void testEmbedding() {

        float[] mockEmbedding = new float[2048];

        when(embeddingModel.embed("What is GST registration?"))
                .thenReturn(mockEmbedding);

        retrievalService.retrieveDocuments("What is GST registration?");

        verify(embeddingModel, times(1))
                .embed("What is GST registration?");
    }
}
