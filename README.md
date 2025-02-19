# Unhandled Error in Express.js POST Request

This repository demonstrates a common error in Express.js applications: the lack of proper error handling for missing or malformed request bodies in POST requests.

## Bug Description

The `bug.js` file contains an Express.js server that accepts POST requests to the `/user` endpoint. It expects a JSON payload containing user data. However, it lacks error handling for cases where the request body is missing or malformed. This can lead to unexpected crashes or silent failures.

## Solution

The `bugSolution.js` file provides a corrected implementation that includes robust error handling.  It checks if `req.body` is defined and if the necessary properties exist before processing the request.