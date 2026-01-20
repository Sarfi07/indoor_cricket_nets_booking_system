/*
  Warnings:

  - You are about to drop the column `slotId` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the `Slot` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `netId` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Booking" DROP CONSTRAINT "Booking_slotId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Slot" DROP CONSTRAINT "Slot_netId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "slotId",
ADD COLUMN     "netId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Slot";
