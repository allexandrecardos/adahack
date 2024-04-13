-- CreateTable
CREATE TABLE "Candidatos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "etnia" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "graduacao" TEXT NOT NULL,
    "senioridade" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pcd" BOOLEAN NOT NULL,
    "infos_tecnicas" TEXT NOT NULL,
    "funcionario_interno" TEXT NOT NULL,

    CONSTRAINT "Candidatos_pkey" PRIMARY KEY ("id")
);
