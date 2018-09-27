FROM nginx
RUN mkdir /etc/nginx/logs && touch /etc/nginx/logs/static.log
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
ADD dist/my-profile /www

#docker build -t profile .
#docker run -d --name profile -p 3001:80 profile
