# Stage 1: Build the application using Maven and OpenJDK
FROM maven:3.8.3-openjdk-17 as build
WORKDIR /app
COPY . /app
RUN mvn package -DskipTests

# Stage 2: Create the final image using a smaller base image
FROM openjdk:17-alpine
WORKDIR /app

# Copy only the built artifact and its dependencies from the build stage
COPY --from=build /app/target/*.jar /app/server.jar

# Command to run the application
CMD ["java", "-jar", "/app/server.jar"]

EXPOSE 2300