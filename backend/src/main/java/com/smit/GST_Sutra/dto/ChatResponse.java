package com.smit.GST_Sutra.dto;

import java.util.List;

public record ChatResponse(
        String answer,
        List<SourceInfo> sources,
        String disclaimer
) {
}
