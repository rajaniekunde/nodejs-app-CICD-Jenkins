pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22.12.0' // Use the Node.js version configured in Jenkins
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Ensure you fetch from the correct branch, such as 'main'
                script {
                    // You can use the 'checkout scm' directive if this pipeline is set up in a multi-branch project
                    git branch: 'main', url: 'https://github.com/rajaniekunde/nodejs-app-CICD-Jenkins.git'
                }
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
