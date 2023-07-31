FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} entradas.jar
ENTRYPOINT ["java","-jar","/entradas.jar"]