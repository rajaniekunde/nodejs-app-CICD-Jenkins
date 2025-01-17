pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22.12.0' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/rajaniekunde/nodejs-app-CICD-Jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install' // Use bat for Windows shell compatibility
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test' // Replace with actual test command or remove if no tests
            }
        }

        stage('Start Application') {
            steps {
                bat '''
                taskkill /F /IM node.exe || echo "No existing node process to kill"
                start /B node index.js
                ''' // Windows equivalent of pkill and nohup
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
