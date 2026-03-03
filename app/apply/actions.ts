"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitApplication(
  prevState: any,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const why = formData.get("why") as string;
  const financialStage = formData.get("financialStage") as string;
  const structuredCommit = formData.get("structuredCommit") === "on";

  if (!name || !email || !why) {
    return { message: "Campos incompletos" };
  }

  const application = await prisma.application.create({
    data: {
      name,
      email,
      why,
      financialStage,
      structuredCommit,
    },
  });

  return { message: "Solicitud registrada. Será revisada manualmente." };
}