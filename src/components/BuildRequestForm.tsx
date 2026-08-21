"use client";

import { useState } from "react";
import type { FormStatus } from "@/lib/types";
import { validateContact } from "@/lib/validation";
import {
  FormField,
  FormStatus as Status,
  SubmitButton,
  TextAreaField,
} from "./forms/Fields";

export function BuildRequestForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    modificationRequired: "",
    budget: "",
    description: "",
  });

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateContact(form);
    if (!form.vehicle.trim()) next.vehicle = "Vehicle is required.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/build-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Status
        status="success"
        success="Your build request has been received. Our team will review your vision and get in touch."
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <FormField label="Name" name="name" value={form.name} onChange={(v) => set("name", v)} error={errors.name} required />
        <FormField label="Phone" name="phone" value={form.phone} onChange={(v) => set("phone", v)} error={errors.phone} required />
        <FormField label="Email" name="email" type="email" value={form.email} onChange={(v) => set("email", v)} error={errors.email} required />
        <FormField label="Vehicle" name="vehicle" value={form.vehicle} onChange={(v) => set("vehicle", v)} error={errors.vehicle} required />
        <FormField
          label="Modification Required"
          name="modificationRequired"
          value={form.modificationRequired}
          onChange={(v) => set("modificationRequired", v)}
        />
        <FormField label="Budget" name="budget" value={form.budget} onChange={(v) => set("budget", v)} />
      </div>
      <TextAreaField
        label="Description"
        name="description"
        value={form.description}
        onChange={(v) => set("description", v)}
      />
      <Status status={status} success="" />
      <SubmitButton loading={status === "loading"}>Start Your Build</SubmitButton>
    </form>
  );
}
