#!/bin/bash

# 配置（使用者配置）
NGINX_CONF_DIR=/usr/local/etc/nginx
PORT=8081
ROOT_PATH=`pwd`

####################
### 以下不要修改 ###
####################

# 处理配置
cp ../../backup/hf_ajax.conf ./hf_ajax.conf.temp
sed 's#{PORT}#'"$PORT"'#g'';s#{ROOT_PATH}#'"$ROOT_PATH"'#g' hf_ajax.conf.temp > hf_ajax.conf
mv hf_ajax.conf $NGINX_CONF_DIR/servers/
rm hf_ajax.conf.temp

# 启动php-fpm
PHP_INFO=`lsof -i:9000`
if [[ $PHP_INFO == '' ]]; then
    php-fpm -D
fi

# 重启Nginx
nginx -s reload
if [ $? -ne 0 ]; then
    nginx && sleep 1
fi

# 打开页面
open http://localhost:$PORT

