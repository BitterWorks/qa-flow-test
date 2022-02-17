# WebdriverIO containerized e2e testing template

## Start new project
1. Clone this repo
2. Run npm i
3. Start containers
```
docker-compose up -d
```

## Configuration
### Allure Reports
To see the allure reports for your project, go to `http://localhost:5050/allure-docker-service/projects/default/reports/latest/index.html`.

### .env file
Sample `.env` file:
```.env
# Comma separated browsers. i.e: firefox,MicrosoftEdge
BROWSERS=chrome
# Selenium Hub port
HUB_PORT=4444
# Name of the host
HOSTNAME=localhost
# Base url to make tests against
BASE_URL=http://localhost
```

## Run tests
```sh
npm run wdio
```