# Node API Proxy Server

Node API Proxy Server for hiding API Keys, rate limiting and caching. This server uses [OpenWeatherMap API](https://openweathermap.org/api) but can be used for others APIs.

This API was created from the tutorial [**Build an API Proxy Server - Hide Your API Keys, Rate Limiting & Caching**](https://youtu.be/ZGymN8aFsv4) from [Traversy Media](https://traversymedia.com)

## Usage

### With NodeJS

Install dependencies

```bash
npm install
```

Run on http://localhost:5000

```bash
npm run dev
```

### With Docker

Start docker container with docker-compose

```bash
docker-compose up
```

## Add public API info

Rename **.env.example** to **.env** and edit the values if you ran the application with NodeJS. If you ran with docker just edit the values.

If the public API URL is **https://api.openweathermap.org/data/2.5/weather?q={city}&appid={APIkey}**

- API_BASE_URL="https://api.openweathermap.org/data/2.5/weather"
- API_KEY_NAME="appid"
- API_KEY_VALUE="YOUR API KEY"

You can add on any other query params as needed when hitting the /api endpoint such as https://yourdomain/api?q=detroit without having to add your key in the client

- Add new routes as you see fit
- Change rate limiting and caching to desired values