import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function AdminApplicationsPage() {
  const applications = await prisma.application.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main style={{ padding: "40px" }}>
      <h1>Revisión de Solicitudes</h1>

      <div style={{ marginTop: "20px" }}>
        {applications.map((app) => (
          <div
            key={app.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <p><strong>Nombre:</strong> {app.name}</p>
            <p><strong>Email:</strong> {app.email}</p>
            <p><strong>Why:</strong> {app.why}</p>
            <p><strong>Financial Stage:</strong> {app.financialStage}</p>
            <p><strong>Commit:</strong> {app.structuredCommit ? "Sí" : "No"}</p>
            <p><strong>Status:</strong> {app.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}