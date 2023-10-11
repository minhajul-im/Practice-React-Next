/*
  Warnings:

  - You are about to drop the column `createdAt` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `otp` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user` table. All the data in the column will be lost.
  - You are about to alter the column `username` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(30)` to `VarChar(25)`.
  - You are about to alter the column `email` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(40)` to `VarChar(35)`.
  - You are about to drop the `brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `invoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productcard` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productdetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productinvoice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productreview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `productslider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userprofile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `whiseslist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `invoice` DROP FOREIGN KEY `Invoice_userId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_brandId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `productcard` DROP FOREIGN KEY `ProductCard_productId_fkey`;

-- DropForeignKey
ALTER TABLE `productcard` DROP FOREIGN KEY `ProductCard_userId_fkey`;

-- DropForeignKey
ALTER TABLE `productdetail` DROP FOREIGN KEY `ProductDetail_productId_fkey`;

-- DropForeignKey
ALTER TABLE `productinvoice` DROP FOREIGN KEY `ProductInvoice_invoiceId_fkey`;

-- DropForeignKey
ALTER TABLE `productinvoice` DROP FOREIGN KEY `ProductInvoice_productId_fkey`;

-- DropForeignKey
ALTER TABLE `productreview` DROP FOREIGN KEY `ProductReview_productId_fkey`;

-- DropForeignKey
ALTER TABLE `productreview` DROP FOREIGN KEY `ProductReview_profileId_fkey`;

-- DropForeignKey
ALTER TABLE `productslider` DROP FOREIGN KEY `ProductSlider_productId_fkey`;

-- DropForeignKey
ALTER TABLE `userprofile` DROP FOREIGN KEY `UserProfile_userId_fkey`;

-- DropForeignKey
ALTER TABLE `whiseslist` DROP FOREIGN KEY `WhisesList_productId_fkey`;

-- DropForeignKey
ALTER TABLE `whiseslist` DROP FOREIGN KEY `WhisesList_userId_fkey`;

-- DropIndex
DROP INDEX `User_otp_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `createdAt`,
    DROP COLUMN `otp`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `password` VARCHAR(35) NOT NULL,
    MODIFY `username` VARCHAR(25) NOT NULL,
    MODIFY `email` VARCHAR(35) NOT NULL;

-- DropTable
DROP TABLE `brand`;

-- DropTable
DROP TABLE `category`;

-- DropTable
DROP TABLE `invoice`;

-- DropTable
DROP TABLE `product`;

-- DropTable
DROP TABLE `productcard`;

-- DropTable
DROP TABLE `productdetail`;

-- DropTable
DROP TABLE `productinvoice`;

-- DropTable
DROP TABLE `productreview`;

-- DropTable
DROP TABLE `productslider`;

-- DropTable
DROP TABLE `userprofile`;

-- DropTable
DROP TABLE `whiseslist`;
