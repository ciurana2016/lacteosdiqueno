# EJECUTAR CON SUDO EN LA VM DE GOOGLE CLOUD

# Quitamos los cambios de haber hecho build
git reset --hard;

# Pillamos ultimos cambios del repo
git pull;

# Compilamos el proyecto
ng build --env=prod --aot --prod
npm run precache

# Borramos cache del proxy 
#

# :D
echo "Actualizacion completada";