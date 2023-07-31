FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} salidas.jar
ENTRYPOINT ["java","-jar","/salidas.jar"]