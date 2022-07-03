#  Nombres  
Joaquín Andrés Silva Donoso  
María Ignacia Morales Soriano  
Andrés Marcelo Vidal Soto

#  Funcionalidades de la aplicación:
- Sistema de registro e inicio de sesión: la página web permite que los usuarios tengan sus propias cuentas dentro de la web, en la cual podrán mantener un catastro de sus datos y visualizar el progreso de los mismos, la información personal entregada podrá ser modificada por el usuario, además si lo desea podrá eliminar (por lo que es una funcionalidad CRUD). 

- Sistema de contacto: el usuario podrá enviar mensajes de forma directa a los encargados de la página web y el administrador tendrá acceso a estos mensajes cuando inicie sesión.

- Calculadora IMC: Permitirá calcular el Índice de Masa Corporal de los usuarios.

#  Detalles de la entrega final
- El sistema es responsivo y permite la vista en móviles generando un menú tipo hamburguesa.

- Para los roles de admin y usuario se tiene que los usuarios pueden enviar sus comentarios, estos serán guardados en la base de datos de la aplicación en la tabla de contacto. Por su parte el administrador podrá ver los comentarios que hay sobre la aplicación sin necesidad de consultar la base de datos.

- Se generó una API-REST con el software de Express/NodeJS utilizando las funcionalidades get para cargar los datos de usuarios y formularios, el método post para crear nuevos usuarios y formularios, el método put para cambiar las contraseñas de usuario y el método delete para eliminar a un usuario si este desea eliminar su cuenta.

- Entre las funcionalidades de seguridad web estan el inicio de sesión, el cierre de sesión, el cambio de contraseñas y las contraseñas encriptadas, las cuales en ningun momento se pueden ver su contenido.

- Los usuarios disponibles en la aplicacion son 
correo: andres.legue@gmail.com
clave: admin1

correo: eli.buendia@gmail.com
clave: usuario1

https://github.com/joaquinSil/Proyecto_web_Fitlife