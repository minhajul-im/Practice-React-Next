/*
  Warnings:

  - You are about to drop the column `customarDetails` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `shippingDetails` on the `invoice` table. All the data in the column will be lost.
  - You are about to drop the column `profilesId` on the `productreview` table. All the data in the column will be lost.
  - You are about to drop the `brands` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productdetails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userprofiles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[productId]` on the table `ProductSlider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customarDetail` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shippingDetail` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileId` to the `ProductReview` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `invoice` DROP FOREIGN KEY `Invoice_userId_fkey`;

-- DropForeignKey
ALTER TABLE `productcard` DROP FOREIGN KEY `ProductCard_productId_fkey`;

-- DropForeignKey
ALTER TABLE `productcard` DROP FOREIGN KEY `ProductCard_userId_fkey`;

-- DropForeignKey
ALTER TABLE `productdetails` DROP FOREIGN KEY `ProductDetails_productsId_fkey`;

-- DropForeignKey
ALTER TABLE `productinvoice` DROP FOREIGN KEY `ProductInvoice_productId_fkey`;

-- DropForeignKey
ALTER TABLE `productreview` DROP FOREIGN KEY `ProductReview_productId_fkey`;

-- DropForeignKey
ALTER TABLE `productreview` DROP FOREIGN KEY `ProductReview_profilesId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_brandsId_fkey`;

-- DropForeignKey
ALTER TABLE `products` DROP FOREIGN KEY `Products_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `productslider` DROP FOREIGN KEY `ProductSlider_productId_fkey`;

-- DropForeignKey
ALTER TABLE `userprofiles` DROP FOREIGN KEY `UserProfiles_userId_fkey`;

-- DropForeignKey
ALTER TABLE `whiseslist` DROP FOREIGN KEY `WhisesList_productId_fkey`;

-- DropForeignKey
ALTER TABLE `whiseslist` DROP FOREIGN KEY `WhisesList_userId_fkey`;

-- AlterTable
ALTER TABLE `invoice` DROP COLUMN `customarDetails`,
    DROP COLUMN `shippingDetails`,
    ADD COLUMN `customarDetail` VARCHAR(100) NOT NULL,
    ADD COLUMN `shippingDetail` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `productreview` DROP COLUMN `profilesId`,
    ADD COLUMN `profileId` BIGINT UNSIGNED NOT NULL;

-- DropTable
DROP TABLE `brands`;

-- DropTable
DROP TABLE `categories`;

-- DropTable
DROP TABLE `productdetails`;

-- DropTable
DROP TABLE `products`;

-- DropTable
DROP TABLE `userprofiles`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `Brand` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `barndName` VARCHAR(40) NOT NULL,
    `barndImage` VARCHAR(200) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(50) NOT NULL,
    `categoryImage` VARCHAR(200) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `shortDescription` VARCHAR(220) NOT NULL,
    `price` VARCHAR(20) NOT NULL,
    `discount` TINYTEXT NOT NULL,
    `discountPrice` VARCHAR(20) NOT NULL,
    `image` VARCHAR(200) NOT NULL,
    `star` DOUBLE NOT NULL,
    `sock` VARCHAR(20) NOT NULL,
    `remark` ENUM('new', 'trending', 'popular') NOT NULL,
    `brandId` BIGINT UNSIGNED NOT NULL,
    `categoryId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductDetail` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `image1` VARCHAR(200) NOT NULL,
    `image2` VARCHAR(200) NOT NULL,
    `image3` VARCHAR(200) NOT NULL,
    `image4` VARCHAR(200) NOT NULL,
    `productId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `ProductDetail_productId_key`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(30) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `otp` VARCHAR(6) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_otp_key`(`otp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserProfile` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `customarName` VARCHAR(50) NOT NULL,
    `customarPhone` VARCHAR(15) NOT NULL,
    `customarAddress` VARCHAR(100) NOT NULL,
    `customarCity` VARCHAR(50) NOT NULL,
    `customarPostcode` VARCHAR(20) NOT NULL,
    `customarState` VARCHAR(20) NOT NULL,
    `shippingName` VARCHAR(50) NOT NULL,
    `shippingPhone` VARCHAR(15) NOT NULL,
    `shippingAddress` VARCHAR(100) NOT NULL,
    `shippingCity` VARCHAR(50) NOT NULL,
    `shippingPostcode` VARCHAR(20) NOT NULL,
    `shippingState` VARCHAR(20) NOT NULL,
    `userId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `ProductSlider_productId_key` ON `ProductSlider`(`productId`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_brandId_fkey` FOREIGN KEY (`brandId`) REFERENCES `Brand`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductDetail` ADD CONSTRAINT `ProductDetail_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSlider` ADD CONSTRAINT `ProductSlider_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProfile` ADD CONSTRAINT `UserProfile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WhisesList` ADD CONSTRAINT `WhisesList_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WhisesList` ADD CONSTRAINT `WhisesList_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductCard` ADD CONSTRAINT `ProductCard_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductCard` ADD CONSTRAINT `ProductCard_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductInvoice` ADD CONSTRAINT `ProductInvoice_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductReview` ADD CONSTRAINT `ProductReview_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `UserProfile`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductReview` ADD CONSTRAINT `ProductReview_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
