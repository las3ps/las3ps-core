/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `email` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `financialStage` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `structuredCommit` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `why` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "financialStage" TEXT NOT NULL,
ADD COLUMN     "reviewedAt" TIMESTAMP(3),
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "structuredCommit" BOOLEAN NOT NULL,
ADD COLUMN     "why" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";
