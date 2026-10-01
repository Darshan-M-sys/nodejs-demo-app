# Node.js CI/CD Pipeline with GitHub Actions

## Project Overview

This project demonstrates an automated CI/CD pipeline for a Node.js application using GitHub Actions and Docker.

Whenever code is pushed to the `main` branch, GitHub Actions automatically:

1. Installs dependencies
2. Runs automated tests
3. Builds a Docker image
4. Logs into Docker Hub
5. Pushes the Docker image to Docker Hub

## Technologies Used

- Node.js
- Express.js
- Jest
- Supertest
- Docker
- Docker Hub
- GitHub
- GitHub Actions

## Project Structure

```text
nodejs-demo-app/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── src/
│   └── app.js
│
├── test/
│   └── app.test.js
│
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md