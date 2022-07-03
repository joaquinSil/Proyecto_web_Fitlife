-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-07-2022 a las 00:51:58
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fitlife`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `asunto` varchar(100) NOT NULL,
  `mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `nombre`, `correo`, `asunto`, `mensaje`) VALUES
(1, 'Joaquin Andres Silva Donoso', 'joaquin.silva.d01@mail.pucv.cl', 'Olvidé contraseña', 'Olvidé mi contraseña y no sé como recuperarla.\r\n\r\nAyuda.'),
(2, 'Maria Ignacia Morales Soriano', 'maria.morales.s@mail.pucv.cl', 'Quiero eliminar mi cuenta', 'Quiero eliminar mi cuenta pero no sé como realizarlo. '),
(3, 'Benjamin Ignacio Rojas Henriquez', 'benjamin.rojas.h@mail.pucv.cl', 'Cambio de correo', '¿Dónde puedo cambiar mi correo?'),
(12, 'Andres Vidal', 'andres.legue@gmail.com', 'problemas con recuperar mi contraseña', 'Hola me gustaría saber si existe un método para poder recuperar mi contraseña debido a que no la recuerdo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `clave` varchar(500) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre`, `correo`, `usuario`, `clave`, `admin`) VALUES
('andres vidal', 'andres.legue@gmail.com', 'andresV', '$2a$10$h246R09QGdueNwCJ/rIQu.DPPv2mRqbyz9wxeK2dGNnY7Gbmzqcua', 1),
('elisa buendia', 'eli.buendia@gmail.com', 'eli', '$2a$10$JNQEDrh2wXMzjDf193vNZOV6mIjiFj.54chGKm6LMxuhexwW.qKNC', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`nombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
