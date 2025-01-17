pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22.12.0' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/rajaniekunde/nodejs-app-CICD-Jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Start Application') {
            steps {
                bat '''
                echo "Attempting to start Node.js app..."
                start /B node index.js > app.log 2>&1
                timeout /t 10
                echo "Node.js app should be running now."
                '''
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
