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

const services = [
  "Buy a Vehicle",
  "Sell a Vehicle",
  "Source a Vehicle",
  "Import Assistance",
  "Customization",
  "Parts & Body Kits",
  "Partnership",
];

export function InquiryForm({
  vehicleName,
  defaultService,
}: {
  vehicleName?: string;
  defaultService?: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: defaultService ?? (vehicleName ? "Buy a Vehicle" : ""),
    message: vehicleName ? `I would like to enquire about ${vehicleName}.` : "",
  });

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateContact(form);
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          vehicleName,
          source: vehicleName ? "vehicle" : "contact",
        }),
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
        <FormField
          label="Name"
          name="name"
          value={form.name}
          onChange={(v) => set("name", v)}
          error={errors.name}
          required
        />
        <FormField
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={(v) => set("phone", v)}
          error={errors.phone}
          required
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={(v) => set("email", v)}
          error={errors.email}
          required
        />
        <FormField
          label="Location"
          name="location"
          value={form.location}
          onChange={(v) => set("location", v)}
        />
      </div>
      {vehicleName ? (
        <p className="text-sm text-silver">
          Vehicle: <span className="text-foreground">{vehicleName}</span>
        </p>
      ) : (
        <SelectField
          label="Service Required"
          name="service"
          value={form.service}
          onChange={(v) => set("service", v)}
          options={services}
        />
      )}
      <TextAreaField
        label="Message"
        name="message"
        value={form.message}
        onChange={(v) => set("message", v)}
      />
      <Status status={status} success="" />
      <SubmitButton loading={status === "loading"}>Submit Enquiry</SubmitButton>
    </form>
  );
}
