#!/bin/bash

# Остановка при ошибке
set -e

DOMAIN="sibur.store"
NODE_VERSION="20.x"
APP_DIR="/var/www/sibur-store"
REPO_URL="$1" # Передается первым аргументом

if [ -z "$REPO_URL" ]; then
    echo "Ошибка: Укажите URL репозитория GitHub первым аргументом."
    echo "Пример: ./setup.sh https://github.com/username/repo.git"
    exit 1
fi

echo "--- 1. Обновление системы ---"
sudo apt-get update && sudo apt-get upgrade -y

echo "--- 2. Установка зависимостей (Curl, Git, Nginx, Certbot) ---"
sudo apt-get install -y curl git nginx certbot python3-certbot-nginx

echo "--- 3. Установка Node.js $NODE_VERSION ---"
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "--- 4. Установка PM2 (менеджер процессов) ---"
sudo npm install -g pm2

echo "--- 5. Настройка директории приложения ---"
if [ -d "$APP_DIR" ]; then
    echo "Папка $APP_DIR уже существует. Обновляем код..."
    cd $APP_DIR
    git pull
else
    echo "Клонируем репозиторий..."
    sudo mkdir -p $APP_DIR
    sudo chown -R $USER:$USER $APP_DIR
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
fi

echo "--- 6. Установка зависимостей проекта и сборка ---"
cd $APP_DIR/frontend
npm install
npm run build

echo "--- 7. Запуск приложения через PM2 ---"
pm2 delete sibur-store || true
pm2 start npm --name "sibur-store" -- start -- -p 3000
pm2 save
pm2 startup | tail -n 1 | bash || true # Автозапуск при перезагрузке

echo "--- 8. Настройка Nginx ---"
sudo cp $APP_DIR/deploy/nginx.conf /etc/nginx/sites-available/$DOMAIN
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

echo "--- 9. Получение SSL сертификата (HTTPS) ---"
# Раскомментируйте, если домен уже направлен на IP
# sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos -m admin@$DOMAIN

echo "============================================"
echo "Установка завершена!"
echo "Сайт должен быть доступен по адресу: http://$DOMAIN"
echo "Для обновления сайта: git pull && cd frontend && npm install && npm run build && pm2 restart sibur-store"
