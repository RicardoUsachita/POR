FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} gateway-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/gateway-0.0.1-SNAPSHOT.jar"]