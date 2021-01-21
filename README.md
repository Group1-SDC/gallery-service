# footwork back-end optimization
This repo contains the gallery microservice for footwork. This legacy code base had its' backend removed and replaced with a service oriented architecture that could handle high levels of user traffic. Note: The front-end code here is not mine.

## 🛠 back-end stack
Node.js, Express.js, PostgreSQL, Docker, NGINX, AWS (S3, EC2), K6, loader.io, New Relic

## ⚙️ back-end design
<img src=backend-design.png>

## 📈 performance improvments
Increased this microservices' request per second threshold from 250 -> 2000+. Furthermore, the infrastructure in place can easily be expanded to handle more. 
