package com.health.disease_prediction.controller;

import org.springframework.web.bind.annotation.*;

import com.health.disease_prediction.service.PredictionService;

@RestController
@RequestMapping("/api/heart")
@CrossOrigin
public class HeartController {

    private final PredictionService service;

    public HeartController(PredictionService service) {
        this.service = service;
    }

    @PostMapping("/predict")
    public String predict(@RequestBody double[] input) {
        return service.predict(input);
    }
}
