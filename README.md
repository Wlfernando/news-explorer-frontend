# Proyecto de búsqueda de noticias

## Descripción general

* Introducción
* Figma
* Componentes
* Hooks
* Utils

## Introducción

Desarrollado con react para la construcción de los componentes en las dos rutas disponibles actualmente en la app. La cabecera tiene un buscador de noticias con la integración de News Api y un backend para guardar en favoritos las noticias seleccionadas como favoritas. Se encuentra una sección de mi persona como autor del proyecto. La ruta para visualizar las noticias guardadas como favoritas es "/saved-news".

## Figma

[Se utilizó el siguiente diseño para el proyecto.](https://www.figma.com/file/J4KquU6h9U8eoDeOSaBPKW/Tu-proyecto-final-ESP?type=design&node-id=0-1&mode=design&t=tn50wzMiVhI8ovRg-0)

## Componentes

### Header

Componente llamado HeaderWithTools para poder modificar su contenido cuando sea necesario, aqui se utilizó en la ruta "main" y con la ruta "/saved-news" con los componentes HomeHeader (con el componente de busqueda) y SavedHeader (con el componente de información de noticas guardadas).

### Cards

Se utilizó un componente con el nombre CardWithMenu para personalizar los botones y la lógica que estos mismos emplearían.

### Form

El componente de formulario tiene la funcionalidad de prevenir el comportamiento por defecto del elemento form ademas de permitirnos validar el contenido de los campos permitiendonos presionar el boton de envio. Esta validación es opcional pasandolo como atributo al componente.

### HamburgerBtn

Es el boton en forma de hamburguesa con la animación de abrir y cerrar.

### Loader

Un span que se renderiza cada vez que esperamos la respuesta asyncrona de una api.

### Main

Se encuentran los componentes donde se van a renderizar todos los contenidos de las diferentes rutas.

### Modals/popups

El componente de modal se utiliza para los diferentes elementos que se ocuparan aquí: "infotooltip", "sign-in", "sign-up". El modalWithForm es la base de "sign-in" y "sign-up".

### Navegation

Es el portador del menu encargado de las rutas y el cierre del perfil o abrir el popup para registrarse.

### NewsInfo

Nos indica la cantidad de noticias guardadas y el nombre de las palabras clave empleados en la busqueda ordenado de mayor a menor ( los dos primeros y los posteriores solo la cantidad de palabras claves empleadas).

### ProtectedRoute

Prohibe el acceso a los usuarios que no estan registrados, invitandoles a autenticarse.

### SearchBar

Encargado de hacer las busquedas a la "News api" y de renderizar los posibles errores que se puedan encontrar o simplemente señalar la falta de contenido con la palabra clave introducida.

## Hooks

Se crearon "customeHooks" como useForm, useGlobalContext, useModal y useSize para facilitar el manejo del código. 

### useForm

Se utiliza el nombre del formulario para recuperar los inputs del mismo y asi manejar los errores de los campos controlados. Retorna un objeto con inputs que contiene el valor, el mensaje de error y un valor booleano para renderizar el error. GetValues retorna unicamente los inputs con sus valores para enviarlos a la api. Un Reset para reestablecer los valores predeterminados. Y por supuesto retorna un controlador para los cambios.

### useGlobalContext

Maneja todos los estados que se ocupan en la app. Se manejan todos los provider en este lugar y es utilizado en el archivo index.js para envolver la aplicación completa.

### useModal

Los argumentos son los nombres de los modales. Retorna un array donde su primer valor es un objeto con los nombres de los modales bajo su responsabilidad y sus valores son booleanos. El segundo valor del array es una funcion para abrir un modal dependiendo del argumento que corresponda con los nombres indicados en su inicialización del useModal. El tercer y ultimo elemento del array es una función para cerrar todos los modales.

### useSize

Responsable de cambiar los elmentos dependiendo del tamaño de la ventana.

## Utils

Aqui se encuentran los archivos de autorización, constantes, los requerimientos a las apis, etc.
