# footwork gallery service
This repo contains the product gallery microservice for footwork. *Note*: The front-end code here is not mine.

## 🧩 objective
I removed this legacy code bases' back-end infrastructure and replaced it with a service oriented architecture that could handle high levels of user traffic. 

## 🛠 back-end stack
Node.js, Express.js, PostgreSQL, Docker, NGINX, AWS (S3, EC2), K6, loader.io, New Relic

## ⚙️ back-end design
<img src=backend-design.png>

## 📈 performance improvments
Upon implementation of this architecture, this microservices' requests per second threshold increased from 250 -> 2000+. Furthermore, the infrastructure currently in place is built in such a way that further scaling can easily be performed as needed.
