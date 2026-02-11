#  Privacy Preserving Disease Prediction System

A full-stack microservices based web application that predicts heart disease risk while preserving user data privacy using:

- Fully Homomorphic Encryption (CKKS)
- Partial Homomorphic Encryption (Paillier)
- Differential Privacy
- Secure ML inference

The system separates **UI, Backend API, and ML computation** into independent services for scalability and security.


##  Live Demo

 **[Click here to visit the website](https://privacy-preserving-disease-prediction-system-i7ztlkqpc.vercel.app)**

---

## Tech Stack

### Frontend
- React (Vite)
- TailwindCSS
- Axios
- Hosted on Vercel

### Backend API
- Spring Boot
- REST APIs
- Docker
- Hosted on Render

### ML Service
- FastAPI
- scikit-learn
- TenSEAL (CKKS FHE)
- Paillier (PHE)
- Differential Privacy
- Docker
- Hosted on Render

---


### Responsibilities

Frontend:
- Collects medical parameters
- Sends request to backend

Backend:
- Business logic
- Calls ML service
- Returns predictions

ML Service:
- Loads trained model
- Applies:
  - Normal SVM
  - FHE
  - PHE
  - Differential Privacy
- Returns secure predictions

---

## Privacy Techniques Implemented

| Technique | Purpose |
|-----------|---------|
| CKKS (FHE) | Compute on encrypted data |
| Paillier (PHE) | Partial encrypted math |
| Differential Privacy | Add Laplace noise |
| Plain SVM | Baseline comparison |

---



## 🏗 Architecture

