## References
* How To Create a Self-Signed SSL Certificate for Nginx in Ubuntu
  * https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu
* NGINX with Self-Signed Certificate on Docker
  * https://medium.com/@miladev95/nginx-with-self-signed-certificate-on-docker-a514bb1a4061
### Official Guide
* Beginner's Guide
  * https://nginx.org/en/docs/beginners_guide.html

## Docker
* https://hub.docker.com/_/nginx
### Docker Version
* `1.25.5-bookworm`
## TLS Certificate
```
$ openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt
.+......+...+....+...+.....+...+.....................+.........+.......+.....+...+.+.....+...+.............+.........+......+..+...+...+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*..........+.........+..+...+.......+.....+....+.........+..+...+...+....+...........+.......+........+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*..+......+.+.....+.+...+..+.......+...+...+..+............+.......+...+.....+.+..+...................+.....+....+..............+...+....+...+..+....+..+...+....+..+...+...+............+..................+...+......+..........+........+......+.......+...............+.....+..........+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
.+.+.....+...+..........+...+...+..+.......+..+.+..+...+.............+.....+............+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*.........+..+.........+.......+..+.+..+.........+.........+.+.....+...+...+...+.........+...+.............+..+.............+..+.............+.........+...+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*.............+.+...+..+......+..........+..+.+......+........+...+...+.......+..+.+..+..........+..+............+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
Common Name (e.g. server FQDN or YOUR name) []:192.168.0.2
Email Address []:jy@wom.ai
```

##
```
docker build --force-rm  -f ./Dockerfile -t webserver .
```
```
docker  run --rm -it --net=host --privileged --name webserver webserver:latest
```
```
docker exec -it webserver /bin/bash
```