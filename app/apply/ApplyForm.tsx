"use client";

import { useActionState } from "react";
import { submitApplication } from "./actions";

export default function ApplyForm() {
  const [state, formAction] = useActionState(
    submitApplication,
    null
  );

  return (
    <>
      <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "500px" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />

        <textarea
          name="why"
          placeholder="¿Por qué quieres entrar?"
          required
        />

        <select name="financialStage" required>
          <option value="">¿En qué punto estás financieramente?</option>
          <option value="INICIO">Inicio</option>
          <option value="ESTABLE">Estable</option>
          <option value="AVANZADO">Avanzado</option>
        </select>

        <label>
          <input type="checkbox" name="structuredCommit" />
          Estoy dispuesto a trabajar estructuradamente
        </label>

        <button type="submit">
          Enviar solicitud
        </button>
      </form>

      {state?.message && (
        <p style={{ marginTop: "20px" }}>
          {state.message}
        </p>
      )}
    </>
  );
}