-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
<<<<<<< HEAD
-- Generation Time: Dec 28, 2015 at 03:29 PM
=======
-- Generation Time: Jan 05, 2016 at 06:16 PM
>>>>>>> refs/remotes/origin/quannh
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chosach`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
<<<<<<< HEAD
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
=======
  `terms` tinyint(1) DEFAULT '0',
  `remember_token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
>>>>>>> refs/remotes/origin/quannh

--
-- Dumping data for table `users`
--

<<<<<<< HEAD
INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'quannguyen1456@gmail.com', '$2y$10$BArAV8z9Q6oACKepLmgcPuaNXXj0COl5/MKxf3yM33xuvrU2s5xAe', NULL, '2015-12-28 12:04:27', '0000-00-00 00:00:00');
=======
INSERT INTO `users` (`id`, `name`, `email`, `password`, `terms`, `remember_token`, `created_at`, `updated_at`) VALUES
(3, 'quan', 'quannh02@wru.vn', '$2y$10$zP9k.ZwGLsu9Iw4sROsnG.uqQtgty2E/z2hOsfUVi8vFuRH2pT/Vi', 0, '', '2016-01-05 16:41:22', '2016-01-01 00:10:04'),
(4, 'quanpro', 'quannguyen@gmail.com', '$2y$10$oiwilXRUYjGcWTAPxHBnseUD7viCyWTvylLxh6OaXnKgPmGlniQeG', 0, '', '2016-01-05 16:41:23', '2016-01-01 02:26:58'),
(5, 'nguyenquan', 'quancute56@gmail.com', '$2y$10$VinPj02c2.vUpvDqAGgCuOVVv2j/0YZRM/LivCTIp1XGEmNQn5PFm', 0, '', '2016-01-05 16:41:24', '2016-01-01 23:27:33'),
(6, 'quannh02', 'quannh04@gmail.com', '$2y$10$LFJYpwDwHtXn/HE63ZgaJe4ewstV7X7Y23Jl9i3mIbL783BNhhn1i', 0, '', '2016-01-05 16:41:25', '2016-01-04 20:33:40'),
(7, 'quan32', 'quannh05@gmail.com', '$2y$10$ADfU25uY.02wz5mDNXXcTuqYQNYgrtg/DDmucZZNMyE6gmEzMQcJS', 0, '', '2016-01-05 16:41:25', '2016-01-04 20:37:10'),
(8, 'quannh0234', 'quannh06@gmail.com', '$2y$10$ym5nZkjWxt9OxqlFR6ksn.KHoQrzuovqkUt3k/uTC/rR4JJfuvHZ.', 0, '', '2016-01-05 16:41:27', '2016-01-04 20:37:53'),
(9, 'quan32', 'quannh07@gmail.com', '$2y$10$hHw1.Min2XFZ.6U2E/KEs.HVhO8bhjdZwESvN8f/Fi2dP5taBPpzG', 0, 'F609SZ2EYkLMFBnQgkycisumFvi7PI4PM6CVtAi0cbpLfU666NKzQasDPv28', '2016-01-05 17:14:13', '2016-01-05 10:14:13'),
(10, 'quan', 'quannh123@gmail.com', '$2y$10$9ZpEHcB4MbiFDVWcGvPswuMBC9VgcjZAlroqzPToiq8OdNjrkit3y', 1, 'Ty1gag4qn1ldlKaW6oeRibETcfvUQdSJTLwvy3RRDKVjVvNotibbzpd47t68', '2016-01-05 17:10:15', '2016-01-05 10:10:15');
>>>>>>> refs/remotes/origin/quannh

--
-- Indexes for dumped tables
--

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
<<<<<<< HEAD
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
=======
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
>>>>>>> refs/remotes/origin/quannh
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
