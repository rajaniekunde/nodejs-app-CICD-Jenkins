pipeline {
    agent any

    environment {
        // Set any environment variables here
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Use bat for Windows shell commands
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Adjust the command if necessary
                    bat 'npm test'
                }
            }
        }

        stage('Start Application') {
            steps {
                script {
                    // Replace this with Windows-compatible start command if needed
                    bat 'npm start'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        failure {
            echo 'Pipeline execution failed.'
        }
    }
}
