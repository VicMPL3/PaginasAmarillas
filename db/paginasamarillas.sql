-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-05-2026 a las 19:39:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `paginasamarillas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `apellidos` varchar(100) NOT NULL,
  `cedula` varchar(20) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `reset_token` varchar(255) DEFAULT NULL,
  `reset_expiration` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `cedula`, `fecha_nacimiento`, `telefono`, `correo`, `password`, `created_at`, `reset_token`, `reset_expiration`) VALUES
(1, 'Victor Manuel', 'Pabon Lopez', '1004778193', '2003-01-03', '3158183640', 'vittor.m.77@gmail.com', '$2y$10$OGaqmeXTpGNlUhWZHOwqjuMMY2.5cm7wESpRky22YUt7Q5W5ZMZpy', '2025-12-14 20:13:01', NULL, NULL),
(2, 'Juan Manuel', 'ALdana Zambrano', '123456789', '1990-01-01', '3000000000', 'jmaldanaz@hotmail.com', '$2y$10$6JtBjuGX9JPKCRX0ZZqvT.y9Yad2EPQBTIHKUCuL413gd.ioWBaC6', '2026-04-03 21:42:05', NULL, NULL),
(4, 'Jose Parmineo', 'Gutierrez Guevara', '1121826983', '1986-09-17', '3226832713', 'Joseguti20@hotmail.com', '$2y$10$cTFwz7YZ.TYQyjVBep/dX.PF4yfQOKb5emEvm7ATPVX2f/DG3V2HW', '2026-04-06 01:41:41', NULL, NULL),
(5, 'Samuel Stiven ', 'Lopez Alvarez', '123123767568', '2004-06-08', '12345567678', 'samuel123@gmail.com', '$2y$10$zTujE8huS/vXXBSW2qeKd.zNIY4JYjIYdV7PGUD7M.U30DvJj2sVO', '2026-04-07 01:01:55', NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cedula` (`cedula`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
