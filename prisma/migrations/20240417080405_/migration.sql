/*
  Warnings:

  - You are about to drop the column `idade` on the `Candidatos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Candidatos" DROP COLUMN "idade",
ADD COLUMN     "data_nascimento" TEXT;
