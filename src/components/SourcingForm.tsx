"use client";

import { useState } from "react";
import type { FormStatus } from "@/lib/types";
import { validateContact } from "@/lib/validation";
import {
  FormField,
  FormStatus as Status,
  SelectField,
  SubmitButton,
  TextAreaField,
} from "./forms/Fields";

export function SourcingForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleBrand: "",
    vehicleModel: "",
    preferredYear: "",
    budgetRange: "",
    preferredMarket: "",
    condition: "",
    additionalRequirements: "",
  });

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateContact(form);
    if (!form.vehicleBrand.trim()) next.vehicleBrand = "Brand is required.";
    if (!form.vehicleModel.trim()) next.vehicleModel = "Model is required.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/sourcing-requests", {
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
        success="Your sourcing request has been received. Our team will review your requirements and get in touch."
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <FormField label="Name" name="name" value={form.name} onChange={(v) => set("name", v)} error={errors.name} required />
        <FormField label="Phone" name="phone" value={form.phone} onChange={(v) => set("phone", v)} error={errors.phone} required />
        <FormField label="Email" name="email" type="email" value={form.email} onChange={(v) => set("email", v)} error={errors.email} required />
        <FormField label="Vehicle Brand" name="vehicleBrand" value={form.vehicleBrand} onChange={(v) => set("vehicleBrand", v)} error={errors.vehicleBrand} required />
        <FormField label="Vehicle Model" name="vehicleModel" value={form.vehicleModel} onChange={(v) => set("vehicleModel", v)} error={errors.vehicleModel} required />
        <FormField label="Preferred Year" name="preferredYear" value={form.preferredYear} onChange={(v) => set("preferredYear", v)} />
        <FormField label="Budget Range" name="budgetRange" value={form.budgetRange} onChange={(v) => set("budgetRange", v)} />
        <SelectField
          label="Preferred Country / Market"
          name="preferredMarket"
          value={form.preferredMarket}
          onChange={(v) => set("preferredMarket", v)}
          options={["UAE", "Europe", "USA", "United Kingdom", "Japan", "Other"]}
        />
        <SelectField
          label="New / Pre-Owned"
          name="condition"
          value={form.condition}
          onChange={(v) => set("condition", v)}
          options={["New", "Pre-Owned"]}
        />
      </div>
      <TextAreaField
        label="Additional Requirements"
        name="additionalRequirements"
        value={form.additionalRequirements}
        onChange={(v) => set("additionalRequirements", v)}
      />
      <Status status={status} success="" />
      <SubmitButton loading={status === "loading"}>Request Sourcing</SubmitButton>
    </form>
  );
}
