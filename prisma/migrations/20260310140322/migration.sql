/*
  Warnings:

  - You are about to alter the column `customer_id` on the `comments` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_customer_id_fkey`;

-- DropIndex
DROP INDEX `comments_customer_id_fkey` ON `comments`;

-- AlterTable
ALTER TABLE `comments` MODIFY `title` VARCHAR(200) NOT NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `customer_id` VARCHAR(100) NOT NULL;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `customer_to_comment_fk` FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
