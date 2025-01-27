-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2024 at 09:54 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_app_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `image_name` varchar(255) DEFAULT NULL,
  `display_order` int(11) NOT NULL,
  `is_featured` enum('0','1') NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`id`, `name`, `parent_id`, `image_name`, `display_order`, `is_featured`, `createdAt`, `updatedAt`) VALUES
(1, 'Websites', 3, '1730885058054.jpg', 1, '1', '2024-11-04 12:36:58', '2024-11-06 09:24:18'),
(2, 'Mobile Apps', 0, '1730885551500.jpg', 2, '1', '2024-11-04 12:36:58', '2024-11-06 09:32:31'),
(3, 'Java Project', 0, '1730885670570.jpg', 3, '1', '2024-11-04 07:36:24', '2024-11-06 09:34:30'),
(4, 'Sample', 0, '1730714686183.jpg', 4, '1', '2024-11-04 10:04:46', '2024-11-04 10:04:46'),
(5, 'Sample 2', 0, '1730715081424.jpg', 4, '0', '2024-11-04 10:11:21', '2024-11-04 10:11:21'),
(6, 'Sample 2', 0, '1730722969609.jpg', 4, '0', '2024-11-04 12:22:49', '2024-11-04 12:22:49'),
(7, 'sadsadsa', 2, '1730726571463.jpg', 45, '0', '2024-11-04 13:22:51', '2024-11-04 13:22:51'),
(8, 'sadsadsadfdf', 2, '1730726649044.jpg', 45, '0', '2024-11-04 13:24:09', '2024-11-04 13:24:09'),
(9, 'another category', 2, '1730726708066.jpg', 89, '0', '2024-11-04 13:25:08', '2024-11-04 13:25:08'),
(10, 'Deepak Category', 3, '1730726964823.jpg', 88, '1', '2024-11-04 13:29:24', '2024-11-04 13:29:24'),
(11, 'Manish Category', 10, '1730727068640.jpg', 109, '0', '2024-11-04 13:31:08', '2024-11-04 13:31:08'),
(13, 'fdfdf', 5, '1732013949670.jpg', 5, '0', '2024-11-08 09:31:50', '2024-11-19 10:59:09'),
(14, 'sadsadasd', 10, '1732013920719.jpg', 3, '0', '2024-11-08 09:32:42', '2024-11-19 10:58:40'),
(15, 'Parent Category 1', 0, '1732013070693.jpg', 5, '0', '2024-11-19 10:44:30', '2024-11-19 10:44:30'),
(16, 'Random Category', 3, '1732021390799.jpg', 45, '1', '2024-11-19 13:03:10', '2024-11-19 13:03:10');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contactus`
--

CREATE TABLE `tbl_contactus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_contactus`
--

INSERT INTO `tbl_contactus` (`id`, `name`, `email`, `subject`, `message`, `createdAt`, `updatedAt`) VALUES
(1, 'deepak', 'deepak@yopmail.com', 'this is subject', 'this is message', '2024-11-28 13:14:28', '2024-11-28 13:14:28'),
(2, 'sdsdsds', 'sdsdsdsd@sdsdsd.com', 'sdsdsdsdsd', 'sadsadsadasda sadsadsadasdsad', '2024-11-28 13:50:13', '2024-11-28 13:50:13'),
(3, 'Manish ', 'Manish@yopmail.com', 'Thsi is subject line', 'This is message name This is message name This is message name This is message name This is message name This is message name This is message name This is message name This is message name This is message name ', '2024-11-28 13:51:40', '2024-11-28 13:51:40');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_email_subscriptions`
--

CREATE TABLE `tbl_email_subscriptions` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_email_subscriptions`
--

INSERT INTO `tbl_email_subscriptions` (`id`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'deepak@yopmail.com', '2024-11-28 06:55:06', '2024-11-28 06:55:06'),
(2, 'manish@yopmail.com', '2024-11-28 07:00:05', '2024-11-28 07:00:05');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pages`
--

CREATE TABLE `tbl_pages` (
  `id` int(11) NOT NULL,
  `page_title` varchar(255) NOT NULL,
  `page_short_description` text NOT NULL,
  `page_description` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_pages`
--

INSERT INTO `tbl_pages` (`id`, `page_title`, `page_short_description`, `page_description`, `createdAt`, `updatedAt`) VALUES
(1, 'tersm and condition', 'tersm and condition short', '<p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p><p><br></p><p>tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description tersm and condition description</p>', '2024-11-20 14:35:41', '2024-11-28 08:12:22'),
(2, 'Privacy Policy ', 'Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy ', '<p>Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description</p><p><br></p><p>Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description</p><p><br></p><p>Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description</p><p><br></p><p>Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description</p><p><br></p><p><br></p><p>Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description</p><p><br></p><p><br></p><p>Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description</p><p><br></p><p><br></p><p>Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description</p><p><br></p><p><br></p><p>Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy descriptionPrivacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description Privacy Policy description</p>', '2024-11-20 14:35:41', '2024-11-28 08:11:52'),
(3, 'About US', 'About us short description About us short description About us short description About us short description About us short description ', '<h3>About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description </h3><p><br></p><p>About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description </p><p><br></p><p><br></p><p><em>About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description</em></p><p><br></p><p><br></p><p><u>About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description</u></p><p><br></p><p><br></p><ol><li>About us short description About us short description About us short description About us short description About us short description </li><li>About us short description About us short description About us short description About us short description About us short description </li><li>About us short description About us short description About us short description About us short description About us short description </li><li>About us short description About us short description About us short description About us short description About us short description </li><li>About us short description About us short description About us short description About us short description About us short description </li><li>About us short description About us short description About us short description</li></ol><p><br></p><h3><br></h3><h3>About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description</h3><p><br></p><p><br></p><p><strong>About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description</strong></p><p><br></p><p><br></p><p>About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description About us short description</p><p><br></p><p>Company Name</p><p>CEO : DS</p>', '2024-11-20 10:19:21', '2024-11-28 07:25:56');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `id` int(11) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `project_description` text NOT NULL,
  `project_technology` text NOT NULL,
  `project_short_description` text NOT NULL,
  `completed_duration` varchar(255) NOT NULL,
  `display_order` int(11) NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_keywords` text NOT NULL,
  `project_slug` varchar(255) NOT NULL,
  `is_featured` enum('0','1') NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`id`, `project_name`, `category_id`, `project_description`, `project_technology`, `project_short_description`, `completed_duration`, `display_order`, `meta_title`, `meta_keywords`, `project_slug`, `is_featured`, `createdAt`, `updatedAt`) VALUES
(1, 'Travel booking portal 7', 10, '<p>Short Desc: Travel booking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalShort Desc: Travel booking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalShort Desc: Travel booking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalShort Desc: Travel booking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalbooking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalShort Desc: Travel booking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalShort Desc: Travel booking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalbooking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalShort Desc: Travel booking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalShort Desc: Travel booking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portal</p>', 'Tech: Travel booking portalTravel booking portalTravel booking portalTravel booking portal', 'Short Desc: Travel booking portalTravel booking portalTravel booking portalTravel booking portalking portalTravel booking portalTravel booking portalTravel booking portalking portalTrav', 'Duration : 84 Hrs', 1, 'Meta title 1', 'Meta keywords 1', 'seo-friendly-url-62', '0', '2024-11-06 16:39:53', '2024-11-27 11:19:20'),
(2, 'Mobile App for CMS', 10, '<p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum IpsumLorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum </p>', 'PHP, RECT NATIVE', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '48 Hrs', 2, 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '0', '2024-11-07 11:00:37', '2024-11-27 11:19:48'),
(3, 'Mobile App for CMS2', 10, '<p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum IpsumLorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum </p>', 'PHP, RECT NATIVE', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '48 Hrs', 2, 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '0', '2024-11-07 11:16:52', '2024-11-27 11:20:33'),
(4, 'Mobile App for CMS 3', 10, '<p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum IpsumLorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum </p>', 'PHP, RECT NATIVE', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '48 Hrs', 2, 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '0', '2024-11-07 11:18:50', '2024-11-27 11:21:06'),
(5, 'Mobile App for CMS 4', 10, '<p>Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum</p>', 'PHP, RECT NATIVE', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '48 Hrs', 2, 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '0', '2024-11-07 11:21:22', '2024-11-27 11:21:37'),
(6, 'B2B Portal', 1, '<p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</strong></p><p><br></p><p><u> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</u></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h3><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>', 'PHP, CODE', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s stand only five centuries, but also the leap into electronic typesetting, ', '78 Hrs', 6, 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '0', '2024-11-07 11:23:41', '2024-11-27 11:22:51'),
(7, 'B2B Portal', 1, '<p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</strong></p><p><br></p><p><u> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</u></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h3><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>', 'PHP, CODE', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ', '78 Hrs', 6, 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '0', '2024-11-07 11:58:52', '2024-11-27 11:23:30'),
(8, 'B2B Portal Website', 1, '<p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</strong></p><p><br></p><p><u> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</u></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><h3><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>', 'PHP, CODE', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ', '78 Hrs', 6, 'Mobile App projects', 'Mobile App projects', 'Mobile App projects', '0', '2024-11-07 13:25:30', '2024-11-27 11:26:15'),
(9, 'B2C Web Portal', 1, '<p><strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</strong></p><p><br></p><p><strong><em>Lorem Ipsum</em></strong><em> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</em></p><p><br></p><p><strong><u>Lorem Ipsum</u></strong><u> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</u></p>', 'PHP, JAVA', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ', '98 Hrs', 9, 'Meta Title', 'Meta keywords', 'b2c-web-portal', '1', '2024-11-07 13:41:41', '2024-11-27 11:23:54'),
(22, 'This is awesome project', 2, '<p>Mobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projects</p>', 'Mobile App projects, PHP, React Native', 'Mobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projectsMobile App projects', '78 Hrs', 10, 'Mobile App projects', 'Mobile App projects keywords', 'Mobile-App-projects', '1', '2024-11-08 10:06:05', '2024-11-27 11:24:30'),
(29, 'sdsdd', 3, '<p>sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad</p>', 'PHP, SKILLS', 'sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad sadsadsad ', '58 Hrs', 15, 'Mobile App projects', 'Mobile App projects', 'Mobile App projects', '1', '2024-11-08 12:56:56', '2024-11-27 11:25:01'),
(30, 'Project Title', 4, '<p>Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description</p>', 'PHP,JAVA', 'Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description ', '78 Hrs', 5, 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', 'Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum ', '1', '2024-11-08 13:08:27', '2024-11-27 11:22:03'),
(31, 'Basic Project Title', 2, '<p>Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title</p>', 'PHP,SKILL', 'Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title Basic Project Title ', '78 Working Hrs', 55, 'Project Meta Title', 'Project Meta keywords', 'project-title', '1', '2024-11-11 05:49:08', '2024-11-27 11:25:26'),
(32, 'Ganga Project', 3, '<p>Ganga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga Project</p><p><br></p><p>Ganga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga Project</p>', 'Ganga Project', 'Ganga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga ProjectGanga Project', '48 hrs', 41, 'Ganga Project', 'Ganga Project', 'Ganga-Project', '1', '2024-11-19 13:04:40', '2024-11-19 13:05:43');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_project_images`
--

CREATE TABLE `tbl_project_images` (
  `id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_project_images`
--

INSERT INTO `tbl_project_images` (`id`, `project_id`, `image_name`, `createdAt`, `updatedAt`) VALUES
(1, 25, '1731064233712.jpg', '2024-11-08 11:10:34', '2024-11-08 11:10:34'),
(2, 25, '1731064233713.jpg', '2024-11-08 11:10:34', '2024-11-08 11:10:34'),
(3, 0, '1731305205075.jpg', '2024-11-11 06:06:45', '2024-11-11 06:06:45'),
(4, 0, '1731305205077.jpg', '2024-11-11 06:06:45', '2024-11-11 06:06:45'),
(5, 0, '1731305205078.jpg', '2024-11-11 06:06:45', '2024-11-11 06:06:45'),
(6, 1, '1731309761209.jpg', '2024-11-11 07:22:41', '2024-11-11 07:22:41'),
(7, 1, '1731309761211.jpg', '2024-11-11 07:22:41', '2024-11-11 07:22:41'),
(8, 1, '1731309761213.jpg', '2024-11-11 07:22:41', '2024-11-11 07:22:41'),
(9, 1, '1731322654934.jpg', '2024-11-11 10:57:34', '2024-11-11 10:57:34'),
(10, 1, '1731322654936.jpg', '2024-11-11 10:57:34', '2024-11-11 10:57:34'),
(11, 1, '1731322654936.jpg', '2024-11-11 10:57:34', '2024-11-11 10:57:34'),
(12, 32, '1732021518769.jpg', '2024-11-19 13:05:18', '2024-11-19 13:05:18'),
(13, 32, '1732021518770.jpg', '2024-11-19 13:05:18', '2024-11-19 13:05:18'),
(14, 32, '1732021518770.jpg', '2024-11-19 13:05:18', '2024-11-19 13:05:18'),
(15, 32, '1732021518771.jpg', '2024-11-19 13:05:18', '2024-11-19 13:05:18'),
(16, 2, '1732706402609.jpg', '2024-11-27 11:20:02', '2024-11-27 11:20:02'),
(17, 2, '1732706402611.jpg', '2024-11-27 11:20:02', '2024-11-27 11:20:02'),
(18, 2, '1732706402612.jpg', '2024-11-27 11:20:02', '2024-11-27 11:20:02'),
(19, 2, '1732706402612.jpg', '2024-11-27 11:20:02', '2024-11-27 11:20:02'),
(20, 2, '1732706402612.jpg', '2024-11-27 11:20:02', '2024-11-27 11:20:02'),
(21, 2, '1732706402613.jpg', '2024-11-27 11:20:02', '2024-11-27 11:20:02'),
(22, 3, '1732706443460.jpg', '2024-11-27 11:20:43', '2024-11-27 11:20:43'),
(23, 3, '1732706443460.jpg', '2024-11-27 11:20:43', '2024-11-27 11:20:43'),
(24, 3, '1732706443460.jpg', '2024-11-27 11:20:43', '2024-11-27 11:20:43'),
(25, 3, '1732706443460.jpg', '2024-11-27 11:20:43', '2024-11-27 11:20:43'),
(26, 4, '1732706474849.jpg', '2024-11-27 11:21:14', '2024-11-27 11:21:14'),
(27, 5, '1732706506864.jpg', '2024-11-27 11:21:46', '2024-11-27 11:21:46'),
(28, 30, '1732706531700.jpg', '2024-11-27 11:22:11', '2024-11-27 11:22:11'),
(29, 6, '1732706586880.jpg', '2024-11-27 11:23:06', '2024-11-27 11:23:06'),
(30, 7, '1732706619548.jpg', '2024-11-27 11:23:39', '2024-11-27 11:23:39'),
(31, 7, '1732706619548.jpg', '2024-11-27 11:23:39', '2024-11-27 11:23:39'),
(32, 9, '1732706642264.jpg', '2024-11-27 11:24:02', '2024-11-27 11:24:02'),
(33, 9, '1732706642264.jpg', '2024-11-27 11:24:02', '2024-11-27 11:24:02'),
(34, 9, '1732706642267.jpg', '2024-11-27 11:24:02', '2024-11-27 11:24:02'),
(35, 22, '1732706678644.jpg', '2024-11-27 11:24:38', '2024-11-27 11:24:38'),
(36, 29, '1732706711490.jpg', '2024-11-27 11:25:11', '2024-11-27 11:25:11'),
(37, 31, '1732706736060.jpg', '2024-11-27 11:25:36', '2024-11-27 11:25:36'),
(38, 8, '1732706783958.jpg', '2024-11-27 11:26:23', '2024-11-27 11:26:23');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `otp` int(11) NOT NULL,
  `otp_expiry_time` bigint(20) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`id`, `name`, `surname`, `address`, `city`, `state`, `country`, `email`, `password`, `otp`, `otp_expiry_time`, `createdAt`, `updatedAt`) VALUES
(15, 'Bikram', 'Kumar', 'Mansarover, Jaipur', 'jaipur', 'rajasthan', 'india', 'bikram@yopmail.com', '123456789', 0, 0, '2024-10-05 11:18:14', '2024-11-14 13:37:37'),
(16, 'Rajesh', 'Kumar', 'Mansarover', 'jaipur', 'rajasthan', 'india', 'rajesh@yopmail.com', '123456789', 716553, 1728627653, '2024-10-05 11:44:10', '2024-10-11 06:11:45'),
(19, 'Rajesh', 'Kumar', 'Mansarover', 'jaipur', 'rajasthan', 'india', 'rajesh12@yopmail.com', '1234567', 0, 0, '2024-10-11 05:57:20', '2024-10-11 05:57:20'),
(21, 'Jhon', 'Kumar', 'Mansarover', 'jaipur', 'rajasthan', 'india', 'jhon@yopmail.com', '1234567', 0, 0, '2024-10-30 10:53:57', '2024-10-30 10:53:57'),
(24, 'Deepak Kumar', 'Singh', '253 New south sterr', 'Jaiput', 'Rajasthan', 'India', 'deepaks@yopmail.com', '1234567', 0, 0, '2024-11-04 05:53:05', '2024-11-04 05:53:05'),
(25, 'Deepak Jr', 'Singh', '253 New south sterr', 'Jaiput', 'Rajasthan', 'India', 'deepakj@yopmail.com', '1234567', 0, 0, '2024-11-04 05:54:54', '2024-11-04 05:54:54');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users_activity`
--

CREATE TABLE `tbl_users_activity` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `device_details` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users_activity`
--

INSERT INTO `tbl_users_activity` (`id`, `user_id`, `type`, `device_details`, `createdAt`, `updatedAt`) VALUES
(1, 15, 'Register', 'device name', '2024-10-05 11:18:14', '2024-10-05 11:18:14'),
(2, 16, 'Register', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-05 11:44:15', '2024-10-05 11:44:15'),
(3, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-05 12:04:42', '2024-10-05 12:04:42'),
(4, 16, 'Reset Password', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-05 12:10:10', '2024-10-05 12:10:10'),
(5, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-05 12:15:30', '2024-10-05 12:15:30'),
(6, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-07 13:40:51', '2024-10-07 13:40:51'),
(7, 16, 'Reset Password', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-07 13:42:19', '2024-10-07 13:42:19'),
(8, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-08 11:01:32', '2024-10-08 11:01:32'),
(9, 16, 'Reset Password', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-08 11:02:07', '2024-10-08 11:02:07'),
(10, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-10 10:32:15', '2024-10-10 10:32:15'),
(11, 19, 'Register', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-11 05:57:23', '2024-10-11 05:57:23'),
(12, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-11 06:04:52', '2024-10-11 06:04:52'),
(13, 16, 'Reset Password', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-11 06:11:48', '2024-10-11 06:11:48'),
(14, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-11 10:46:51', '2024-10-11 10:46:51'),
(15, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-24 06:18:17', '2024-10-24 06:18:17'),
(16, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-24 06:39:32', '2024-10-24 06:39:32'),
(17, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-24 06:48:23', '2024-10-24 06:48:23'),
(18, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-24 06:58:15', '2024-10-24 06:58:15'),
(19, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-24 09:17:52', '2024-10-24 09:17:52'),
(20, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:20:52', '2024-10-24 09:20:52'),
(21, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:21:37', '2024-10-24 09:21:37'),
(22, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:26:29', '2024-10-24 09:26:29'),
(23, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:28:55', '2024-10-24 09:28:55'),
(24, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:44:37', '2024-10-24 09:44:37'),
(25, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:45:04', '2024-10-24 09:45:04'),
(26, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:45:37', '2024-10-24 09:45:37'),
(27, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:45:39', '2024-10-24 09:45:39'),
(28, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:46:36', '2024-10-24 09:46:36'),
(29, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 09:58:16', '2024-10-24 09:58:16'),
(30, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-24 10:31:26', '2024-10-24 10:31:26'),
(31, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-28 11:05:52', '2024-10-28 11:05:52'),
(32, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-28 12:27:46', '2024-10-28 12:27:46'),
(33, 15, 'Update Profile', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-28 13:45:40', '2024-10-28 13:45:40'),
(34, 15, 'Update Profile', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-28 13:45:56', '2024-10-28 13:45:56'),
(35, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-30 07:23:46', '2024-10-30 07:23:46'),
(36, 1, 'Update Profile', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-30 07:33:20', '2024-10-30 07:33:20'),
(37, 1, 'Update Profile', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-30 07:35:29', '2024-10-30 07:35:29'),
(38, 1, 'Update Profile', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-30 07:42:30', '2024-10-30 07:42:30'),
(39, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-10-30 10:43:18', '2024-10-30 10:43:18'),
(40, 20, 'Register', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-30 10:52:50', '2024-10-30 10:52:50'),
(41, 21, 'Register', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-30 10:53:59', '2024-10-30 10:53:59'),
(42, 22, 'Register', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-30 10:54:21', '2024-10-30 10:54:21'),
(43, 23, 'Register', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-10-30 10:55:13', '2024-10-30 10:55:13'),
(44, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-04 05:45:49', '2024-11-04 05:45:49'),
(45, 24, 'Register', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-04 05:53:05', '2024-11-04 05:53:05'),
(46, 25, 'Register', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"131.0\",\"engine\":\"Gecko\",\"engine_version\":\"131.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-04 05:54:55', '2024-11-04 05:54:55'),
(47, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-05 08:59:57', '2024-11-05 08:59:57'),
(48, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-05 09:51:11', '2024-11-05 09:51:11'),
(49, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-11-05 10:33:13', '2024-11-05 10:33:13'),
(50, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-05 12:59:57', '2024-11-05 12:59:57'),
(51, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-11-05 13:02:16', '2024-11-05 13:02:16'),
(52, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-06 09:13:42', '2024-11-06 09:13:42'),
(53, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-06 13:52:08', '2024-11-06 13:52:08'),
(54, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-07 10:02:49', '2024-11-07 10:02:49'),
(55, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-07 10:11:48', '2024-11-07 10:11:48'),
(56, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-08 10:54:33', '2024-11-08 10:54:33'),
(57, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-08 13:17:45', '2024-11-08 13:17:45'),
(58, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-08 13:27:36', '2024-11-08 13:27:36'),
(59, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-11 05:44:43', '2024-11-11 05:44:43'),
(60, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-11-11 06:52:21', '2024-11-11 06:52:21'),
(61, 16, 'Login', '{\"os\":{},\"client\":{\"type\":\"library\",\"name\":\"Postman Desktop\",\"version\":\"7.42.0\"},\"device\":{\"id\":\"\",\"type\":\"\",\"brand\":\"\",\"model\":\"\",\"info\":null}}', '2024-11-11 10:02:40', '2024-11-11 10:02:40'),
(62, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-11 10:31:19', '2024-11-11 10:31:19'),
(63, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-13 12:49:13', '2024-11-13 12:49:13'),
(64, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-14 07:20:29', '2024-11-14 07:20:29'),
(65, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-14 10:44:52', '2024-11-14 10:44:52'),
(66, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-14 12:40:50', '2024-11-14 12:40:50'),
(67, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-14 13:56:56', '2024-11-14 13:56:56'),
(68, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-14 13:57:21', '2024-11-14 13:57:21'),
(69, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 06:05:02', '2024-11-15 06:05:02'),
(70, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 07:00:16', '2024-11-15 07:00:16'),
(71, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 07:00:43', '2024-11-15 07:00:43'),
(72, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 07:02:08', '2024-11-15 07:02:08'),
(73, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 07:05:07', '2024-11-15 07:05:07'),
(74, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:46:21', '2024-11-15 10:46:21'),
(75, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:46:33', '2024-11-15 10:46:33'),
(76, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:46:50', '2024-11-15 10:46:50'),
(77, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:47:13', '2024-11-15 10:47:13'),
(78, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:47:49', '2024-11-15 10:47:49'),
(79, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:48:10', '2024-11-15 10:48:10'),
(80, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:50:30', '2024-11-15 10:50:30'),
(81, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:51:54', '2024-11-15 10:51:54'),
(82, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:53:18', '2024-11-15 10:53:18'),
(83, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:55:10', '2024-11-15 10:55:10'),
(84, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:55:23', '2024-11-15 10:55:23'),
(85, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 10:57:01', '2024-11-15 10:57:01'),
(86, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 11:03:52', '2024-11-15 11:03:52'),
(87, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 12:29:05', '2024-11-15 12:29:05'),
(88, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 12:57:51', '2024-11-15 12:57:51'),
(89, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:04:00', '2024-11-15 13:04:00'),
(90, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:04:44', '2024-11-15 13:04:44'),
(91, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:09:09', '2024-11-15 13:09:09'),
(92, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:17:14', '2024-11-15 13:17:14'),
(93, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:19:26', '2024-11-15 13:19:26'),
(94, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:20:54', '2024-11-15 13:20:54'),
(95, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:23:09', '2024-11-15 13:23:09'),
(96, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:27:13', '2024-11-15 13:27:13'),
(97, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:28:40', '2024-11-15 13:28:40'),
(98, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-15 13:35:51', '2024-11-15 13:35:51'),
(99, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-19 10:01:32', '2024-11-19 10:01:32'),
(100, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-19 10:09:54', '2024-11-19 10:09:54'),
(101, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-19 10:18:31', '2024-11-19 10:18:31'),
(102, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-19 10:19:52', '2024-11-19 10:19:52'),
(103, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-19 12:22:57', '2024-11-19 12:22:57'),
(104, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-19 12:27:21', '2024-11-19 12:27:21'),
(105, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-19 12:59:18', '2024-11-19 12:59:18'),
(106, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-20 09:10:50', '2024-11-20 09:10:50'),
(107, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-27 10:34:17', '2024-11-27 10:34:17'),
(108, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-27 10:34:27', '2024-11-27 10:34:27'),
(109, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-27 10:34:34', '2024-11-27 10:34:34'),
(110, 16, 'Login', '{\"os\":{\"name\":\"Windows\",\"version\":\"10\",\"short_name\":\"WIN\",\"platform\":\"x64\",\"family\":\"Windows\"},\"client\":{\"type\":\"browser\",\"name\":\"Firefox\",\"short_name\":\"FF\",\"version\":\"132.0\",\"engine\":\"Gecko\",\"engine_version\":\"132.0\",\"family\":\"Firefox\"},\"device\":{\"id\":\"\",', '2024-11-28 07:23:25', '2024-11-28 07:23:25');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_website_settings`
--

CREATE TABLE `tbl_website_settings` (
  `id` int(11) NOT NULL,
  `website_name` varchar(255) NOT NULL,
  `website_global_meta_title` varchar(255) NOT NULL,
  `website_global_meta_keywords` varchar(255) NOT NULL,
  `website_logo` varchar(255) NOT NULL,
  `copyright_text` varchar(255) NOT NULL,
  `admin_list_page_size` int(11) NOT NULL,
  `front_list_page_size` int(11) NOT NULL,
  `from_email` varchar(255) NOT NULL,
  `from_name` varchar(255) NOT NULL,
  `website_address` text NOT NULL,
  `website_email` varchar(255) NOT NULL,
  `website_phone` varchar(255) NOT NULL,
  `site_on` enum('0','1') NOT NULL DEFAULT '0',
  `site_down_message` text NOT NULL,
  `show_theme_mode` enum('0','1') NOT NULL DEFAULT '1',
  `facebook_link` varchar(255) NOT NULL,
  `twitter_link` varchar(255) NOT NULL,
  `youtube_link` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_website_settings`
--

INSERT INTO `tbl_website_settings` (`id`, `website_name`, `website_global_meta_title`, `website_global_meta_keywords`, `website_logo`, `copyright_text`, `admin_list_page_size`, `front_list_page_size`, `from_email`, `from_name`, `website_address`, `website_email`, `website_phone`, `site_on`, `site_down_message`, `show_theme_mode`, `facebook_link`, `twitter_link`, `youtube_link`, `createdAt`, `updatedAt`) VALUES
(1, 'webiste hub 1', 'webiste hub Meta title', 'webiste hub keywords 1', 'website_logo.png', 'copyright@webiste hub', 15, 20, 'no-reply@webistehub.com', 'webistehub.com fromname', 'webistehub 253 new south street india', 'contact@webistehub.com', '98959595959595,0141-6565656565', '0', '<p>Website down</p>', '1', 'https://www.facebook.com', 'https://www.twitter.com', 'https://www.youtube.com', '2024-11-11 17:37:38', '2024-11-14 13:42:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_contactus`
--
ALTER TABLE `tbl_contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_email_subscriptions`
--
ALTER TABLE `tbl_email_subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_pages`
--
ALTER TABLE `tbl_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_project_images`
--
ALTER TABLE `tbl_project_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `tbl_users_activity`
--
ALTER TABLE `tbl_users_activity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_website_settings`
--
ALTER TABLE `tbl_website_settings`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_contactus`
--
ALTER TABLE `tbl_contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_email_subscriptions`
--
ALTER TABLE `tbl_email_subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_pages`
--
ALTER TABLE `tbl_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tbl_project_images`
--
ALTER TABLE `tbl_project_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tbl_users_activity`
--
ALTER TABLE `tbl_users_activity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `tbl_website_settings`
--
ALTER TABLE `tbl_website_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
