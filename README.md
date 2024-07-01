# README COVID TRACKER 🦠

## Descripción 📖

Creación de un dashboard interactivo que muestra de manera dinámica la información sobre el COVID-19 utilizando la API de Disease CovidMap. Dicho dashboard permite a los usuarios consultar estadísticas actualizadas de COVID-19 en varios países y visualizar diferentes tipos de datos. 
El acceso al dashboard se crea a través de una landing page con información sobre el COVID-19 y su prevención.
 
El proyecto está desarrollado con React y JavaScript, ofreciendo una interfaz intuitiva y fácil de usar.

## Funcionalidades 📋

* Visualización Dinámica: Muestra estadísticas en tiempo real sobre el COVID-19.
* Interactividad: Los usuarios pueden seleccionar diferentes países y tipos de datos para visualizar.
* Filtros Personalizables: Permite consultar datos específicos como casos confirmados, recuperados, muertes, entre otros.
* Gráficos y Tablas: Presenta la información de manera gráfica y en tablas para facilitar la interpretación.
* Actualización Automática: Los datos se actualizan automáticamente para reflejar la información más reciente.

## Tecnologías Utilizadas 🛠️

* HTML, CSS
* React: Biblioteca principal para la construcción de la interfaz de usuario.
* JavaScript: Lenguaje de programación utilizado para la lógica del proyecto.
* API de Disease CovidMap: Fuente de los datos sobre COVID-19 (http://disease.sh/).
* Axios: Utilizado para realizar las solicitudes a la API .
* Bootstrap: Framework de CSS para el diseño responsivo y estilizado del dashboard.
* DataTables (con jQuery): Para la creación de la tabla interactiva del Tracker 2.
* React Data Table Component: Para la elaboración del Tracker 3.
* GitHub: (https://github.com/Paola077/project_covid_tracker.git).
* JVector Map: Mapa del mundo interactivo
* Vistest: Framework utilizado para el testing.

## Instalación 🔧

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clonar el repositorio:
Acceda a la página del repositorio online
Copie la URL del repositorio que aparece al acceder al botón Code

2. Instalar dependencias:
Entre en VS Code 
En la Terminal de VS Code (Ctrl + ñ o Terminal > New terminal) escribimos lo siguiente:
`$ git clone (y el enlace copiado)`
`cd ../path/to/the/file`
`$ npm install`

3. Iniciar el servidor de desarrollo:

`npm start`


## Cómo visualizarlo en el navegador:
	
	Abrimos de nuevo la terminal y escribimos:
	$ npm run dev
	CTRL + clic en el enlace que aparece:
	
	 ➜  Local:   http://localhost:XXXX/

El dashboard debería estar disponible en http://localhost:XXXX.

### Navegar por el Dashboard:

Primero aparecerá la Landing page, en su barra de navegación hay un botón llamado ‘Tracker’, este nos llevará al Dashboard:

A la izquierda se encuentra un SideBar que nos permite navegar por los diferentes Trackers del Dashboard:

Tracker 1. Seleccionar País: Usa el menú desplegable para seleccionar el país del que deseas ver las estadísticas.
Tracker 2. Elegir Tipo de Datos: Selecciona el tipo de datos (casos confirmados, recuperados, muertes) que deseas visualizar.
Tracker 3. Tabla de gráficos que muestra el Top 10 de países con diferentes tipos de filtrado.
Tracker 4. Actualizar Datos: Los datos se actualizarán automáticamente con recargar la página para obtener la información más reciente.

## Despliegue:
https://main--joyful-sherbet-03b135.netlify.app/

## Autoras ✒️
Carolina Botella - https://github.com/CarolBV
Cristina Pérez - https://github.com/CrisZDE
Leire del Hoyo - https://github.com/Erieltxu
Mabel Zárate - https://github.com/MabelZar
Paola Perdomo  - https://github.com/Paola077