node {
    stage('Slack started') {
        slackSend channel: "#northcoders-java", message: "FINGERS CROSSED - start building"
   }

   stage('Preparation') {
     git 'https://github.com/tfarrelly01/React-FrontEnd-Spring-REST-api.git'
   }

   stage('Clean') {
     sh "mvn -Dmaven.test.failure.ignore clean"
   }

   stage('Package') {
     sh "mvn -Dmaven.test.failure.ignore package"
   }

   stage('Docker Build') {
     sh "docker build -t mybuildings ."
   }

   stage('Stop app') {
     sh "docker stop mybuildings || true"
     sh "docker rm mybuildings || true"
   }

   stage('Docker Deploy') {
        sh "docker run -d --name react-frontend -p 8082:9090 react-frontend"
   }
}