FROM nginx:1.25.5-bookworm

#
# https://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-nginx-in-ubuntu
#

COPY index.html /usr/share/nginx/html/index.html
COPY nginx-selfsigned.crt /etc/ssl/certs/nginx-selfsigned.crt
COPY nginx-selfsigned.key /etc/ssl/private/nginx-selfsigned.key
COPY self-signed.conf /etc/nginx/snippets/self-signed.conf

COPY dhparam.pem /etc/nginx/dhparam.pem

COPY ssl-params.conf /etc/nginx/snippets/ssl-params.conf
COPY default.conf /etc/nginx/conf.d/default.conf