pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'bubble-game'
        DOCKER_TAG = 'latest'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Get code from repository
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Add tests when you have them
                sh 'echo "No tests configured yet"'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build Docker image
                sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
            }
        }
        
        stage('Deploy') {
            steps {
                // Stop existing container if running
                sh '''
                    docker ps -q --filter "name=bubble-game" | grep -q . && docker stop bubble-game && docker rm bubble-game || echo "No container running"
                '''
                
                // Run new container
                sh "docker run -d --name bubble-game -p 3000:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}"
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline succeeded! Application is deployed.'
        }
        failure {
            echo 'Pipeline failed! Check the logs for details.'
        }
    }
}