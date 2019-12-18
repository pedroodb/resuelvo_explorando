# Resuelvo Explorando

Aplicacion que permite para llevar a cabo las actividades desarrolladas a traves de la herramienta [MOLE](https://github.com/pedroodb/resuelvo_explorando_web).

Para poder ejecutar esta aplicacion se dispone de un archivo 'resuelvo_explorando.apk' en la carpeta raiz de este repositorio, que se puede instalar en cualquier dispositivo android.
Tambien se puede probar utilizando la aplicacion 'expo', para esto debe:
  1) Clonar el repositorio localmente
  2) Instalar las dependencias necesarias utilizando 'yarn' o 'npm'
  3) Ejecutar 'yarn expo start', esto levantara un servidor de prueba en su computadora, luego puede:
  4) Instalar la aplicacion 'Expo' en su telefono
  5) Ingresar y seguir las instrucciones para ejecutar la aplicacion

Para generar una actividad nueva debera levantar la herramienta [MOLE](https://github.com/pedroodb/resuelvo_explorando_web) y la siguiente [API](https://github.com/fedemozzon/Resuelvo_Explorando_API).  
Debera estar conectado con su telefono a la misma red local que la API, y reemplazar el valor de la constante API definido en 'src/helpers/apiConnection.js' por el de la ip del equipo donde se este ejecutando la API.  
Luego podra cargar cualquier actividad alli almacenada ingresando su id en la pantalla de Nueva Actividad.
