node {
    stage('Slack started') {
        slackSend channel: "#northcoders-java", message: "FINGERS CROSSED - start building"
   }

   stage('Preparation') {
     git 'https://github.com/tfarrelly01/React-FrontEnd-Spring-REST-api.git'
   }

   stage('Docker Build') {
     sh "docker build -t react-frontend ."
   }

   stage('Stop app') {
     sh "docker stop react-frontend || true"
     sh "docker rm react-frontend || true"
   }

   stage('Docker Deploy') {
        sh "docker run -d --name react-frontend -p 80:3000 react-frontend"
   }
}