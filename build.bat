set NAME=azuretest
set PORT=8080
docker stop %NAME%
docker rmi %NAME%
docker build -t %NAME% .
docker run -p %PORT%:80 --rm --name=%NAME% %NAME%