-- CreateTable
CREATE TABLE `Brands` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `barndName` VARCHAR(40) NOT NULL,
    `barndImage` VARCHAR(200) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categories` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `categoryName` VARCHAR(50) NOT NULL,
    `categoryImage` VARCHAR(200) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Products` (
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
    `brandsId` BIGINT UNSIGNED NOT NULL,
    `categoryId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductDetails` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `image1` VARCHAR(200) NOT NULL,
    `image2` VARCHAR(200) NOT NULL,
    `image3` VARCHAR(200) NOT NULL,
    `image4` VARCHAR(200) NOT NULL,
    `productsId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `ProductDetails_productsId_key`(`productsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductSlider` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(60) NOT NULL,
    `shortDescription` VARCHAR(150) NOT NULL,
    `price` VARCHAR(20) NOT NULL,
    `productId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(30) NOT NULL,
    `email` VARCHAR(40) NOT NULL,
    `otp` VARCHAR(6) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Users_username_key`(`username`),
    UNIQUE INDEX `Users_email_key`(`email`),
    UNIQUE INDEX `Users_otp_key`(`otp`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserProfiles` (
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

-- CreateTable
CREATE TABLE `WhisesList` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `userId` BIGINT UNSIGNED NOT NULL,
    `productId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductCard` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `size` VARCHAR(10) NOT NULL,
    `color` VARCHAR(40) NOT NULL,
    `quantity` VARCHAR(40) NOT NULL,
    `userId` BIGINT UNSIGNED NOT NULL,
    `productId` BIGINT UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invoice` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `total` VARCHAR(10) NOT NULL,
    `vat` VARCHAR(10) NOT NULL,
    `payment` VARCHAR(10) NOT NULL,
    `customarDetails` VARCHAR(100) NOT NULL,
    `shippingDetails` VARCHAR(100) NOT NULL,
    `transactionId` VARCHAR(30) NOT NULL,
    `deliveryStatus` ENUM('Processing', 'On_the_way', 'Completed') NOT NULL,
    `userId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductInvoice` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `invoiceId` BIGINT UNSIGNED NOT NULL,
    `productId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProductReview` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `rating` VARCHAR(10) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `productId` BIGINT UNSIGNED NOT NULL,
    `profilesId` BIGINT UNSIGNED NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_brandsId_fkey` FOREIGN KEY (`brandsId`) REFERENCES `Brands`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductDetails` ADD CONSTRAINT `ProductDetails_productsId_fkey` FOREIGN KEY (`productsId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductSlider` ADD CONSTRAINT `ProductSlider_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserProfiles` ADD CONSTRAINT `UserProfiles_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WhisesList` ADD CONSTRAINT `WhisesList_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WhisesList` ADD CONSTRAINT `WhisesList_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductCard` ADD CONSTRAINT `ProductCard_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductCard` ADD CONSTRAINT `ProductCard_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductInvoice` ADD CONSTRAINT `ProductInvoice_invoiceId_fkey` FOREIGN KEY (`invoiceId`) REFERENCES `Invoice`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductInvoice` ADD CONSTRAINT `ProductInvoice_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductReview` ADD CONSTRAINT `ProductReview_profilesId_fkey` FOREIGN KEY (`profilesId`) REFERENCES `UserProfiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProductReview` ADD CONSTRAINT `ProductReview_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
