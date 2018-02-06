# Lacteosdiqueno

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/da409733f5e541bebef041a8906cb997)](https://www.codacy.com/app/ciurana2016/lacteosdiqueno?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ciurana2016/lacteosdiqueno&amp;utm_campaign=Badge_Grade)

## HOLA

## Como compilar (y meter serviceworker)
Compila usando "Ahead of time" y el ev de produccion.
Luego crea el service worker para cachear el contenido.
```
    ng build --env=prod --aot --prod
    npm run precache
```

## Para probar en local
Usando live-server
```
    npm run static-serve
```

## Montar en produccion
Pasos a seguir para montar node y todos los paquetes necesarios (sudo alomejor)
```
# NODE
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
# ANGULAR CLI
npm install -g @angular/cli
```
Bajo la carpeta del proyecto:
```
npm install --no-optional
npm install ngx-cookies
```

__Para actualizar version de la web ejecutar:__
```
sh update_page.sh
```

