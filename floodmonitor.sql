-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2020 at 09:38 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `floodmonitor`
--

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `id` int(11) NOT NULL,
  `longitude` double(11,9) NOT NULL,
  `latitude` double(11,9) NOT NULL,
  `deviceId` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`id`, `longitude`, `latitude`, `deviceId`) VALUES
(5, 80.278829000, 7.328482000, 'GJF25d'),
(7, 80.278829000, 7.388482000, 'GJF252'),
(9, 80.318780300, 7.319517600, 'GJF25a'),
(1, 80.318948200, 7.322062000, 'nks18'),
(13, 80.388780300, 7.395176000, 'G5F24a');

-- --------------------------------------------------------

--
-- Table structure for table `deviceinfo`
--

CREATE TABLE `deviceinfo` (
  `deviceId` varchar(11) NOT NULL,
  `temp` int(11) NOT NULL,
  `hum` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  `lastUpdated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `deviceinfo`
--

INSERT INTO `deviceinfo` (`deviceId`, `temp`, `hum`, `distance`, `lastUpdated`) VALUES
('GJF25a', 28, 10, 100, '2020-04-18 16:19:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`longitude`,`latitude`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `deviceId` (`deviceId`);

--
-- Indexes for table `deviceinfo`
--
ALTER TABLE `deviceinfo`
  ADD PRIMARY KEY (`deviceId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
