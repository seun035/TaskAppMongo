pipeline{
    agent any
    stages {
        stage('Build'){
            steps {
                sh 'node app.js'
            }
        }
        stage('Test') {
            agent {
                dockerfile true 
            }
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