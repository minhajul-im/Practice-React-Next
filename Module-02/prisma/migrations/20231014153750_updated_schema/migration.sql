/*
  Warnings:

  - You are about to drop the column `parentId` on the `Post` table. All the data in the column will be lost.
  - You are about to alter the column `categoryId` on the `PostCategory` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `MediumInt`.
  - You are about to drop the column `parentId` on the `PostComment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[categoryId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postCommentId]` on the table `PostComment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `postId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Category` DROP FOREIGN KEY `Category_parentId_fkey`;

-- DropIndex
DROP INDEX `Post_authorId_fkey` ON `Post`;

-- AlterTable
ALTER TABLE `Category` ADD COLUMN `categoryId` MEDIUMINT NULL;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `parentId`,
    ADD COLUMN `postId` MEDIUMINT NOT NULL;

-- AlterTable
ALTER TABLE `PostCategory` MODIFY `categoryId` MEDIUMINT NOT NULL;

-- AlterTable
ALTER TABLE `PostComment` DROP COLUMN `parentId`,
    ADD COLUMN `postCommentId` MEDIUMINT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Category_categoryId_key` ON `Category`(`categoryId`);

-- CreateIndex
CREATE UNIQUE INDEX `Post_postId_key` ON `Post`(`postId`);

-- CreateIndex
CREATE UNIQUE INDEX `PostComment_postCommentId_key` ON `PostComment`(`postCommentId`);

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostComment` ADD CONSTRAINT `PostComment_postCommentId_fkey` FOREIGN KEY (`postCommentId`) REFERENCES `PostComment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostCategory` ADD CONSTRAINT `PostCategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Category` ADD CONSTRAINT `Category_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
