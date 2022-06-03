#  nombres  
Joaquín Andrés Silva Donoso  
María Ignacio Morales Soriano  
andres marcelo vidal soto

#  Funcionalidades de la aplicación:
- Sistema de registro e inicio de sesión: la página web permite que los usuarios tengan sus propias cuentas dentro de la web, 
en la cual podrán mantener un catastro de sus datos y visualizar el progreso de los mismos, la información personal entregada 
podrá ser modificada por el usuario, además si lo desea podrá eliminar (por lo que es una funcionalidad CRUD). 
Si bien esta interfaz está realizada y se pueden agregar datos, al no poseer una base de datos actualmente, los datos no se pueden almacenar.

- Sistema de contacto: el usuario podrá enviar mensajes de forma directa a los encargados de la página web, 
y si posee cuenta en la página, podrá recibir una notificación a esta, además de modificar o eliminar los mensajes 
que haya enviado (por lo que es una funcionalidad CRUD).

- Calculadora IMC: Permitirá calcular el Índice de Masa Corporal de los usuarios, y estos se almacenarán si el usuario posee una cuenta en la plataforma.

- Registro de las calorías: el usuario podrá registrar y modificar las calorías que consuma en un día, 
y si posee cuenta en la página se le hará una recomendación de acuerdo a la cantidad de calorías consumidas y su IMC, 
al requerir de una base de datos para realizar esta acción, se realizará en un futuro (por lo que es una funcionalidad CRUD).

#  Comentario:
- A los archivos vidasana.js, meditacion.js y ejercicio.js se les genera una línea de código extra al hacer watch con tsc y actualizar el js .
 Esto produce que los videos no se pueden visualizar. Sin embargo, no debería producir inconvenientes al visualizar la entrega una vez realizada .
-Se traspaso todo el programa a Angular, se utilisa el archivo JSON listaVideos.json para guradar la informacion de los videos,
esta informacion se llama en los componentes ts de ejercicio, nutricion y meditacion y se utiliza ngfor para crear el carrusel en home.
-Actualmente el programa presentea un problea el cual causa que se tenga que actualizar la pagina para una carga mas rapida cada vez que 
opera el menu de navegacion y no conosemos la fuente ni como sulucionarlo.

https://github.com/joaquinSil/Proyecto_web_Fitlife