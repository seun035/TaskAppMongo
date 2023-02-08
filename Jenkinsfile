pipeline{
    agent any
    stages {
        stage('Build'){
            steps {
                sh 'npm install'
                sh 'node app.js'
            }
        }
        stage('Test') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm test'
            }
        }
        stage('Deploy to registry') {
            steps {
                sh 'deploy to registry'
            }
        }
    }

}