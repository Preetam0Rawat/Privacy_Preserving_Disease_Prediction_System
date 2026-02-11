package com.health.disease_prediction.service;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PredictionService {

    private final RestTemplate restTemplate = new RestTemplate();
    

    @Value("${ml.url}")
    private String mlUrl;


    public String predict(double[] input) {
        return restTemplate.postForObject(mlUrl, input, String.class);
    }
}
