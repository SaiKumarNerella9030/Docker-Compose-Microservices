pipeline {
  agent any

  environment {
    IMAGE_NAME = "my-frontend"
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/your-repo/Docker-Compose-Microservices-with-Jenkins-CI-CD.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        dir('frontend') {
          sh 'docker build -t $IMAGE_NAME .'
        }
      }
    }

    stage('Test') {
      steps {
        echo 'Run frontend tests here'
      }
    }

    stage('Push (Optional)') {
      steps {
        echo 'Push to Docker Hub if needed'
      }
    }
  }
}
