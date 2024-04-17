/*
  Warnings:

  - The `infos_tecnicas` column on the `Candidatos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `funcionario_interno` column on the `Candidatos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Candidatos" ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "idade" DROP NOT NULL,
ALTER COLUMN "telefone" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "etnia" DROP NOT NULL,
ALTER COLUMN "genero" DROP NOT NULL,
ALTER COLUMN "graduacao" DROP NOT NULL,
ALTER COLUMN "senioridade" DROP NOT NULL,
ALTER COLUMN "cidade" DROP NOT NULL,
ALTER COLUMN "bairro" DROP NOT NULL,
ALTER COLUMN "estado" DROP NOT NULL,
ALTER COLUMN "pcd" DROP NOT NULL,
DROP COLUMN "infos_tecnicas",
ADD COLUMN     "infos_tecnicas" TEXT[],
DROP COLUMN "funcionario_interno",
ADD COLUMN     "funcionario_interno" BOOLEAN;
