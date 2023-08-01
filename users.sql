-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 01, 2023 at 07:24 PM
-- Server version: 11.0.2-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_lyrid`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(5) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `role` tinyint(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `fullname`, `password`, `photo`, `role`) VALUES
(1, 'riojusticiof@gmail.com', 'Rio Justicio F', '$2y$10$LbDIcBp.B/.EiZczSyk5fObCCj3hF5P20qxHdNR1FfUXqIV/mCocW', 'The Fallen Angel.jpeg', 2),
(3, 'riojusticiof@gmail.com3', 'Rio Justicio', '$2y$10$O29FlauMzDoGcpJENP61W.RlyTO1SCYWADiZkCQ7yrdTsk7bxxsDe', '', 1),
(4, 'okeoke@gmail.com', 'okeoke', '$2y$10$DCVP.sdnslU91ejzrOfT/uwE9BTQ/4X3c6WeMDr2dG1p8G0wGb6WC', '', 1),
(5, 'okeoke@gmail.comasd', 'okeoke asd', '$2y$10$lzJF1oDb7IrfY6ET6TGRu.kRMC2/B.LPDgvE3D9U.KPxNOr86ggMK', '', 1),
(6, 'qwe@gmail.comzxc', 'qwe zxc', '$2y$10$BRVQ8aJ2SSYdHhfFSNrC5O.nC3cMHtfX95ylUJEq08PZTUv2xLPCa', '', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
