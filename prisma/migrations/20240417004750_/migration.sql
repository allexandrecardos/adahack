/*
  Warnings:

  - Changed the type of `funcionario_interno` on the `Candidatos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Candidatos" DROP COLUMN "funcionario_interno",
ADD COLUMN     "funcionario_interno" BOOLEAN NOT NULL;
