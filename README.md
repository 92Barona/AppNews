Esta app es la parte frontend de la aplicación de Archivar Noticias desarrollada con Angular y Bootstrap
Para instalarla debemos hacer lo siguiente:
1. Descargamos y descomprimimos la aplicación
2. Abrimos un terminal y nos dirigimos a la carpeta AppNews-master
3. Descargamos e instalamos node y npm con el comando: `npm install`
4. Ejecutamos la app con el comando: `npm run start` 

NOTA: La app encargada del backend con la que tendremos conexión a la base de datos la puedes encontrar aquí: AppNewsServer (https://github.com/92Barona/AppNewsServer).


# MANUAL RÁPIDO
Si la instalación ha sido correcta, encontrarás la web de la app en `http://localhost:4200/`. Aquí verás una barra de Navegación con 3 botones.
Con la opción "Create New" irás a una página donde podrás crear noticias con un título y una descripción.
Cuando hayas creado una noticia, esta aparecerá en la página de "All News". Aquí podrás redirigirte a la página de la noticia con la opción "Detail", o archivar la noticia con la opción "Archive".
Si archivas una noticia, esta desaparecerá de la página "All News" y aparecerá en la página "Archived News", donde podrás de nuevo dirigirte a la página de la noticia en cuestión o eliminarla con la opción "Remove".

# MyProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
