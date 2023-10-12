-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_authorId_fkey`;

-- DropIndex
DROP INDEX `Category_parentId_fkey` ON `Category`;

-- AlterTable
ALTER TABLE `User` MODIFY `intro` TINYTEXT NULL,
    MODIFY `profile` TEXT NULL;
