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

