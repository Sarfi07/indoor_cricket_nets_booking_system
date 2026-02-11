/*
  Warnings:

  - You are about to drop the column `netId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the `Net` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "netId";

-- DropTable
DROP TABLE "public"."Net";
