pipeline {
    agent any

    tools {
        nodejs 'NodeJS 16' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/yourusername/nodejs-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test' // Replace with actual test command or remove if no tests
            }
        }

        stage('Start Application') {
            steps {
                sh '''
                pkill -f "node index.js" || true
                nohup node index.js &
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
