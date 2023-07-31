FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} resumen.jar
ENTRYPOINT ["java","-jar","/resumen.jar"]