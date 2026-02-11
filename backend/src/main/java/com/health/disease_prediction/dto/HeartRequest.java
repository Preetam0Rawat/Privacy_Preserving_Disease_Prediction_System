package com.health.disease_prediction.dto;


import lombok.Data;
import java.util.List;

@Data
public class HeartRequest {
    private List<Double> inputs;
}

