pipeline {
  agent any
  stages {
    stage('restart') {
      steps {
        sh '''pwd
docker-compose stop
docker-compose build --no-cache
docker-compose up -d --build --force-recreate'''
      }
    }

  }
}