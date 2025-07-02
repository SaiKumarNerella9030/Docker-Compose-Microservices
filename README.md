# 🐳 Docker Compose Microservices with Jenkins CI/CD

This project demonstrates a real-world microservices architecture using **Docker Compose**, featuring a **React frontend**, **Node.js backend**, **PostgreSQL database**, and **Jenkins** for CI/CD. 

---

## 📦 Stack Overview

| Service    | Tech Stack        | Purpose                              |
|------------|-------------------|--------------------------------------|
| `frontend` | React + Nginx     | UI layer with API proxying           |
| `backend`  | Node.js + Express | Handles API logic                    |
| `db`       | PostgreSQL        | Persistent storage                   |
| `jenkins`  | Jenkins (Docker)  | CI/CD pipeline orchestration         |


---

## 🛠️ Features

- ✅ Full Docker-based microservice setup
- ✅ Inter-container networking via Docker Compose
- ✅ `.env`-based environment variable management
- ✅ Jenkins CI/CD pipeline with Docker-in-Docker
- ✅ Database seeding via `init.sql`
- ✅ Reverse proxy from frontend to backend
- ✅ Real-time issue simulation (DNS, volume, startup errors)

---

## 🗂️ Project Structure
docker-network-lab/
├── frontend/ # React app (served via Nginx)
│ ├── Dockerfile
│ ├── src/
│ └── public/
├── backend/ # Express.js API
│ ├── Dockerfile
│ └── index.js
├── db/ # PostgreSQL init
│ └── init.sql
├── jenkins/ # Jenkins setup
│ ├── Dockerfile
│ └── plugins.txt
├── .env # Environment variables
├── docker-compose.yml
└── Jenkinsfile # Jenkins pipeline script


---

## 🚀 Getting Started

### 🔧 Prerequisites

- Docker
- Docker Compose
- Git
- Node.js (for local dev, optional)

---

### 🔥 Spin Up Services

```bash
git clone git@github.com:YourUsername/Docker-Compose-Microservices.git
cd Docker-Compose-Microservices

# Start all services
docker-compose up --build

📍 Services:

Frontend: http://localhost:3000

Backend: http://localhost:5000

Jenkins: http://localhost:8080

PostgreSQL: port 5432

# Start Jenkins
docker-compose up -d jenkins

