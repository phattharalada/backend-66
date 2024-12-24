-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2024 at 05:22 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `isbn` varchar(13) NOT NULL,
  `bname` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `isbn`, `bname`, `price`, `created_at`) VALUES
(1, '9783598215933', 'The Marquis and I', 250, '2024-12-17 14:32:49'),
(2, '9783598215957', 'Blood on the Tongue', 352, '2024-12-17 14:32:49'),
(3, '9783598215995', 'A Higher Loyalty', 157, '2024-12-17 14:32:49'),
(4, '9783598215919', 'The Mars Room', 199, '2024-12-17 14:32:49'),
(5, '9783598215766', 'His Toy', 289, '2024-12-17 14:32:49');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `firstname`, `lastname`, `age`, `created_at`, `address`) VALUES
(1, 'Neil', 'Armstrong', 34, '2024-12-17 14:32:49', NULL),
(2, 'Leslie', 'Ellis', 24, '2024-12-17 14:32:49', NULL),
(3, 'Sandra', 'Hoffman', 35, '2024-12-17 14:32:49', NULL),
(4, 'Cameron', 'Meyer', 19, '2024-12-17 14:32:49', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sell_histories`
--

CREATE TABLE `sell_histories` (
  `id` int(11) NOT NULL,
  `isbn` varchar(13) DEFAULT NULL,
  `emp_id` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `sell_histories`
--

INSERT INTO `sell_histories` (`id`, `isbn`, `emp_id`, `price`, `amount`, `created_at`) VALUES
(1, '9783598215933', 1, 250, 5, '2024-12-17 14:36:41'),
(2, '9783598215957', 1, 352, 1, '2024-12-17 14:36:41'),
(3, '9783598215766', 3, 289, 2, '2024-12-17 14:36:41'),
(4, '9783598215957', 4, 352, 4, '2024-12-17 14:36:41'),
(5, '9783598215933', 4, 250, 6, '2024-12-17 14:36:41'),
(6, '9783598215919', 2, 199, 2, '2024-12-17 14:36:41'),
(7, '9783598215933', 3, 250, 3, '2024-12-17 14:36:41'),
(8, '9783598215995', 2, 157, 2, '2024-12-17 14:36:41'),
(9, '9783598215919', 3, 199, 7, '2024-12-17 14:36:41'),
(10, '9783598215995', 1, 157, 1, '2024-12-17 14:36:41'),
(11, '9783598215933', 1, 250, 5, '2024-12-17 14:37:49'),
(12, '9783598215957', 1, 352, 1, '2024-12-17 14:37:49'),
(13, '9783598215766', 3, 289, 2, '2024-12-17 14:37:49'),
(14, '9783598215957', 4, 352, 4, '2024-12-17 14:37:49'),
(15, '9783598215933', 4, 250, 6, '2024-12-17 14:37:49'),
(16, '9783598215919', 2, 199, 2, '2024-12-17 14:37:49'),
(17, '9783598215933', 3, 250, 3, '2024-12-17 14:37:49'),
(18, '9783598215995', 2, 157, 2, '2024-12-17 14:37:49'),
(19, '9783598215919', 3, 199, 7, '2024-12-17 14:37:49'),
(20, '9783598215995', 1, 157, 1, '2024-12-17 14:37:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `isbn` (`isbn`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sell_histories`
--
ALTER TABLE `sell_histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sell_histories`
--
ALTER TABLE `sell_histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sell_histories`
--
ALTER TABLE `sell_histories`
  ADD CONSTRAINT `sell_histories_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employees` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
