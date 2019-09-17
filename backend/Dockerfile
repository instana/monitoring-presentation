FROM openjdk:8u222-jdk
MAINTAINER Ben Ripkens "ben@instana.com"
RUN apt-get update && apt-get install -y maven
COPY . /opt/backend
WORKDIR /opt/backend
RUN mvn install
CMD ["java", "-jar", "target/twoot-1.0.0.jar"]
