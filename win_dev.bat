mkdir mongodb
start cmd.exe /k "mongod --dbpath ./mongodb"
TIMEOUT 10
start cmd.exe /k "nodemon index.js"
start cmd.exe /k "ng serve -o --proxy-config proxy.config.json"