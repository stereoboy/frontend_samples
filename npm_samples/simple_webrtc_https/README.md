## References
* `express` for static file server
  * https://velog.io/@mainfn/Node.js-express%EC%97%90%EC%84%9C-static-File-Serving-%ED%95%98%EA%B8%B0

## Application Description

### Generate Self-Signed Certificate

```
cd simple_webrtc_https
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
...+....+..+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*.....+......+.........+...+..+.............+...+..+...+.+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*........+.......+..............+...+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
....+...+...............+...+...+......+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*........+.....+....+..+...+...+.........+................+...+..+.........+....+..+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*.+.............+.....................+.....+......+...+.+..+..........+..+.......+...+........+...+......+..........+.....+....+.....+.......+........+....+.....+.+..............+.+.........+...+.........+......+..............+..................+.......+........+.......+...+..+...+.+.................+...+.+...+..+.+..+......+.......+.....+...+....+......+..+.......+......+.........+...+.....+...+....+......+.....+...............+.......+.....+...+......+....+.........+...+..............+....+..............+...+...................+........+.+.....+.+......+.....+....+...........+...+....+.....+...............+.+.....+.........+.+.....+.+......+...+........................+..+...+.......+......+...+.....+......+...+.......+.........+.........+...+........+......+..........+.........+.........+..+...+......+....+..+......+..........+..+.+..+.............+..+....+...+...........+.+.....+.........+.+......+..+......+.+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
-----
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:KR
State or Province Name (full name) [Some-State]:Seoul
Locality Name (eg, city) []:Seoul
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Crazing Lab
Organizational Unit Name (eg, section) []:R&D
Common Name (e.g. server FQDN or YOUR name) []:localhost
Email Address []:jy@wom.ai
```
### Frontend
```
cd frontend
npm init -y
npm i express fs https
npm i nodemon -D
```

### Backend
```
cd backend
npm init -y
npm i express cors https socket.io
npm i nodemon -D
```