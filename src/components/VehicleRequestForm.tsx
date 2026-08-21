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

export function VehicleRequestForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    vehicleType: "",
    budget: "",
    preferredYear: "",
    preferredMarket: "",
    condition: "",
    customizationRequired: "",
    additionalRequirements: "",
  });

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateContact(form);
    if (!form.brand.trim()) next.brand = "Brand is required.";
    if (!form.model.trim()) next.model = "Model is required.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/vehicle-requests", {
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
        success="Your request has been received. Our team will review your requirements and get in touch."
      />
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <FormField label="Name" name="name" value={form.name} onChange={(v) => set("name", v)} error={errors.name} required />
        <FormField label="Phone" name="phone" value={form.phone} onChange={(v) => set("phone", v)} error={errors.phone} required />
        <FormField label="Email" name="email" type="email" value={form.email} onChange={(v) => set("email", v)} error={errors.email} required />
        <FormField label="Brand" name="brand" value={form.brand} onChange={(v) => set("brand", v)} error={errors.brand} required />
        <FormField label="Model" name="model" value={form.model} onChange={(v) => set("model", v)} error={errors.model} required />
        <SelectField
          label="Vehicle Type"
          name="vehicleType"
          value={form.vehicleType}
          onChange={(v) => set("vehicleType", v)}
          options={["SUV", "Sports Car", "Supercar", "Luxury Sedan", "Muscle Car", "Performance", "Custom Build"]}
        />
        <FormField label="Budget" name="budget" value={form.budget} onChange={(v) => set("budget", v)} />
        <FormField label="Preferred Year" name="preferredYear" value={form.preferredYear} onChange={(v) => set("preferredYear", v)} />
        <SelectField
          label="Preferred Market"
          name="preferredMarket"
          value={form.preferredMarket}
          onChange={(v) => set("preferredMarket", v)}
          options={["India", "UAE", "USA", "Europe", "UK", "Japan", "Other"]}
        />
        <SelectField
          label="New / Pre-Owned"
          name="condition"
          value={form.condition}
          onChange={(v) => set("condition", v)}
          options={["New", "Pre-Owned"]}
        />
        <SelectField
          label="Customization Required?"
          name="customizationRequired"
          value={form.customizationRequired}
          onChange={(v) => set("customizationRequired", v)}
          options={["Yes", "No"]}
        />
      </div>
      <TextAreaField
        label="Additional Requirements"
        name="additionalRequirements"
        value={form.additionalRequirements}
        onChange={(v) => set("additionalRequirements", v)}
      />
      <Status status={status} success="" />
      <SubmitButton loading={status === "loading"}>Submit Request</SubmitButton>
    </form>
  );
}
