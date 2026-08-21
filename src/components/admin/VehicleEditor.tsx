"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Vehicle } from "@/lib/types";

const types = [
  "SUV",
  "Sports Car",
  "Supercar",
  "Luxury Sedan",
  "Muscle Car",
  "Performance",
  "Custom Build",
];
const statuses = ["AVAILABLE", "COMING_SOON", "ON_REQUEST", "SOLD"];
const markets = ["India", "UAE", "USA", "Europe", "United Kingdom", "Japan", "Other"];

export function VehicleEditor({ vehicle }: { vehicle?: Vehicle }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    id: vehicle?.id ?? crypto.randomUUID(),
    slug: vehicle?.slug ?? "",
    brand: vehicle?.brand ?? "",
    model: vehicle?.model ?? "",
    year: String(vehicle?.year ?? new Date().getFullYear()),
    type: vehicle?.type ?? "SUV",
    location: vehicle?.location ?? "On Request",
    originMarket: vehicle?.originMarket ?? "Other",
    status: vehicle?.status ?? "ON_REQUEST",
    overview: vehicle?.overview ?? "",
    engine: vehicle?.engine ?? "",
    transmission: vehicle?.transmission ?? "",
    power: vehicle?.power ?? "",
    drivetrain: vehicle?.drivetrain ?? "",
    exterior: vehicle?.exterior ?? "",
    interior: vehicle?.interior ?? "",
    featured: vehicle?.featured ?? false,
    images: vehicle?.images.map((i) => i.url).join("\n") ?? "",
  });

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const payload = {
      vehicle: {
        id: form.id,
        slug:
          form.slug ||
          `${form.brand}-${form.model}`
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, ""),
        brand: form.brand,
        model: form.model,
        year: Number(form.year) || new Date().getFullYear(),
        type: form.type,
        location: form.location,
        originMarket: form.originMarket,
        status: form.status,
        overview: form.overview,
        engine: form.engine,
        transmission: form.transmission,
        power: form.power,
        drivetrain: form.drivetrain,
        exterior: form.exterior,
        interior: form.interior,
        featured: form.featured,
        priceOnRequest: true,
        images: [],
      },
      imageUrls: form.images.split("\n"),
    };
    const url = vehicle ? `/api/admin/vehicles/${vehicle.id}` : "/api/admin/vehicles";
    const res = await fetch(url, {
      method: vehicle ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setLoading(false);
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Could not save vehicle.");
      return;
    }
    router.push("/admin/vehicles");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Brand" value={form.brand} onChange={(v) => set("brand", v)} />
        <Field label="Model" value={form.model} onChange={(v) => set("model", v)} />
        <Field label="Slug" value={form.slug} onChange={(v) => set("slug", v)} />
        <Field label="Year" value={form.year} onChange={(v) => set("year", v)} />
        <Select label="Type" value={form.type} onChange={(v) => set("type", v as typeof form.type)} options={types} />
        <Select label="Status" value={form.status} onChange={(v) => set("status", v as typeof form.status)} options={statuses} />
        <Select label="Market" value={form.originMarket} onChange={(v) => set("originMarket", v as typeof form.originMarket)} options={markets} />
        <Field label="Location" value={form.location} onChange={(v) => set("location", v)} />
        <Field label="Engine" value={form.engine} onChange={(v) => set("engine", v)} />
        <Field label="Transmission" value={form.transmission} onChange={(v) => set("transmission", v)} />
        <Field label="Power" value={form.power} onChange={(v) => set("power", v)} />
        <Field label="Drivetrain" value={form.drivetrain} onChange={(v) => set("drivetrain", v)} />
        <Field label="Exterior" value={form.exterior} onChange={(v) => set("exterior", v)} />
        <Field label="Interior" value={form.interior} onChange={(v) => set("interior", v)} />
      </div>
      <label className="block">
        <span className="text-[11px] tracking-[0.22em] text-silver uppercase">Overview</span>
        <textarea
          value={form.overview}
          onChange={(e) => set("overview", e.target.value)}
          rows={4}
          className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-3"
        />
      </label>
      <label className="block">
        <span className="text-[11px] tracking-[0.22em] text-silver uppercase">
          Image URLs (one per line)
        </span>
        <textarea
          value={form.images}
          onChange={(e) => set("images", e.target.value)}
          rows={5}
          className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-3 text-sm"
        />
      </label>
      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={form.featured}
          onChange={(e) => set("featured", e.target.checked)}
        />
        Featured on homepage
      </label>
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <button
        type="submit"
        disabled={loading}
        className="bg-foreground px-8 py-4 text-[11px] tracking-[0.22em] text-background uppercase"
      >
        {loading ? "Saving…" : "Save vehicle"}
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.22em] text-silver uppercase">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-3"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.22em] text-silver uppercase">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-3"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-black">
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
