-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 13, 2019 lúc 03:11 PM
-- Phiên bản máy phục vụ: 10.1.34-MariaDB
-- Phiên bản PHP: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `timetable`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--
CREATE DATABASE IF NOT EXISTS `timetable` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `timetable`;

CREATE TABLE `admin` (
  `id_admin` int(11) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`id_admin`, `password`) VALUES
(1, '1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `class`
--

CREATE TABLE `class` (
  `id_class` int(11) NOT NULL,
  `class_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `class`
--

INSERT INTO `class` (`id_class`, `class_name`) VALUES
(1, '12A1'),
(2, '12A2'),
(3, '12A3'),
(4, '12A3'),
(5, '12A4'),
(6, '12A3'),
(7, '12A3'),
(8, '12A3'),
(9, '12A5'),
(10, '11A1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `day`
--

CREATE TABLE `day` (
  `id_day` int(11) NOT NULL,
  `day_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `day`
--

INSERT INTO `day` (`id_day`, `day_name`) VALUES
(2, 'Thứ 2'),
(3, 'Thứ 3'),
(4, 'Thứ 4'),
(5, 'Thứ 5'),
(6, 'Thứ 6'),
(7, 'Thứ 7');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `timetable`
--

CREATE TABLE `timetable` (
  `id_class` int(11) NOT NULL,
  `id_day` int(11) NOT NULL,
  `content` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `timetable`
--

INSERT INTO `timetable` (`id_class`, `id_day`, `content`) VALUES
(1, 2, 'Sinh , Sử , Địa , GDCD , Hóa'),
(1, 3, 'Văn , Hóa , Địa , Tin Học , Toán'),
(1, 4, 'Văn , Văn , Địa , Toán , Toán'),
(1, 7, 'Sinh , Hóa , Thể dục , Tin Học , Công nghệ');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Chỉ mục cho bảng `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id_class`);

--
-- Chỉ mục cho bảng `day`
--
ALTER TABLE `day`
  ADD PRIMARY KEY (`id_day`);

--
-- Chỉ mục cho bảng `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`id_class`,`id_day`),
  ADD KEY `FK_timetable_day` (`id_day`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `class`
--
ALTER TABLE `class`
  MODIFY `id_class` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `day`
--
ALTER TABLE `day`
  MODIFY `id_day` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `timetable`
--
ALTER TABLE `timetable`
  ADD CONSTRAINT `FK_timetable_class` FOREIGN KEY (`id_class`) REFERENCES `class` (`id_class`),
  ADD CONSTRAINT `FK_timetable_day` FOREIGN KEY (`id_day`) REFERENCES `day` (`id_day`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
