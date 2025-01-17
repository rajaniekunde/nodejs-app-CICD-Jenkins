pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22.12.0' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/rajaniekunde/nodejs-app-CICD-Jenkins.git' // Use the main branch
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install' // Use bat for Windows shell compatibility
            }
        }

        stage('Start Application') {
            steps {
                bat '''
                taskkill /F /IM node.exe || echo "No existing node process to kill"
                echo "Attempting to start Node.js app..."
                start /B node index.js > app.log 2>&1
                ''' // Logging the output for better visibility
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
