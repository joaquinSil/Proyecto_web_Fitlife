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

#  Detalles de la entrega final
- El sistema es responsivo y permite la vista en moviles generando un menu tipo hamburguesa.
- Para los roles de admin y usuario se tiene que los usuarios pueden enviar sus comentarios, estos seran guardados en la base de datos de la aplicacion en la tabla de contacto. Por su parte el administrador podra ver los comentarios que hay sobre la aplicacion sin necesidad de consultar la base de datos.
- Se genero una API-REST con el software de Express/NodeJS utilizando las funcionalidades get para cargar los datos de usuarios y formularios, el metodo post para crear nuevos usuarios y formularios, el metodo put para cambiar las contraseñas de usuario y el metodo delete para eliminar a un usuario si este desea eliminar su cuenta.
- Entre las funcionalidades de seguridad web estan el inicio de sesion, el cierre de sesion, el cambio de contraseñas y las contraseñas encriptadas, las cuales en ningun momento se pueden ver su contenido.

https://github.com/joaquinSil/Proyecto_web_Fitlife