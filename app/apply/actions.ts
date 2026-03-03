"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitApplication(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;

  if (!name || name.trim().length < 2) {
    return { message: "Nombre inválido" };
  }

  const application = await prisma.application.create({
    data: {
      name: name.trim(),
    },
  });

  console.log("Guardado en DB:", application);

  return { message: `Solicitud guardada para ${application.name}` };
}