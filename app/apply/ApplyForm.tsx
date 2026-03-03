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
      <form action={formAction}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          style={{ border: "1px solid black", padding: "8px" }}
        />

        <button type="submit" style={{ marginLeft: "10px" }}>
          Enviar
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