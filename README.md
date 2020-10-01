# zdt-poc
PoC project to test zero time docker deploy

Idea from: https://coderbook.com/@marcus/how-to-do-zero-downtime-deployments-of-docker-containers/

# How to Run

1. Bring the router up: `docker-compose --project-name=traefik -f docker-compose.traefik.yml up -d`
2. Bring one of the environments (containers) up: `./deployment.sh`


# PoC Test Results
It doesn't pass the Zero Downtime test: `ab -c 10 -n 10000 http://127.0.0.1:3010/`
Some lag exists after the container is terminated but before health check found it down.