package com.health.disease_prediction.service;


import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PredictionService {

    private final RestTemplate restTemplate = new RestTemplate();

    public String predict(double[] input) {
        String url = "http://localhost:8000/predict";
        return restTemplate.postForObject(url, input, String.class);
    }
}
