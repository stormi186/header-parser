# Request Header Parser Microservice

This service will get the user IP adress, preferred languages and system infos.

A Full-stack JavaScript application built using NodeJS and Express.

## User Story

I can get the IP address, preferred languages (from header Accept-Language)
and system infos (from header User-Agent) for my device.

## Example Usage

You can access the API directly through a browser or through a get ajax request.

```
https://handsomely-heath.glitch.me/api/whoami
```

## Example Output

```javascript
{ 
  "ipaddress":"159.20.14.100",
  "language":"en-US,en;q=0.5",
  "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0" 
}
```
## Live Preview

[https://handsomely-heath.glitch.me/](https://handsomely-heath.glitch.me/)
