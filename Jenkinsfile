pipeline {
    agent any 

    stages {
        stage('docker create image') {
            steps {
                sh 'sudo docker build -t git-todo .'
            }
        }

        stage('kill existing port runnig with image name') {
            steps {
                sh 'current_user=$(sudo docker ps -q --filter ancestor=git-todo)'
            }
            steps {
                sh 'sudo docker stop $current_user'
            }
        }

        stage('docker run image in a container') {
            steps {
                sh 'sudo docker run -d -p:3000:3000 git-todo'
            }
        }

        stage('deployed') {
            steps {
                echo 'deployed'
            }
        }
    }
}
