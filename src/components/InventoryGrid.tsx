"use client";

import { useMemo, useState } from "react";
import type { Vehicle } from "@/lib/types";
import { VehicleCard } from "./VehicleCard";

export function InventoryGrid({ vehicles }: { vehicles: Vehicle[] }) {
  const [brand, setBrand] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");
  const [availability, setAvailability] = useState("All");

  const brands = useMemo(
    () => ["All", ...Array.from(new Set(vehicles.map((v) => v.brand))).sort()],
    [vehicles],
  );
  const types = useMemo(
    () => ["All", ...Array.from(new Set(vehicles.map((v) => v.type))).sort()],
    [vehicles],
  );
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(vehicles.map((v) => v.location))).sort()],
    [vehicles],
  );

  const filtered = vehicles.filter((v) => {
    if (brand !== "All" && v.brand !== brand) return false;
    if (type !== "All" && v.type !== type) return false;
    if (location !== "All" && v.location !== location) return false;
    if (availability !== "All" && v.status !== availability) return false;
    return true;
  });

  return (
    <div>
      <div className="grid gap-6 border border-white/10 bg-surface p-6 md:grid-cols-4">
        <Filter label="Brand" value={brand} onChange={setBrand} options={brands} />
        <Filter
          label="Vehicle Type"
          value={type}
          onChange={setType}
          options={[
            "All",
            "SUV",
            "Sports Car",
            "Supercar",
            "Luxury Sedan",
            "Muscle Car",
            "Performance",
            "Custom Build",
          ]}
        />
        <Filter label="Location" value={location} onChange={setLocation} options={locations} />
        <Filter
          label="Availability"
          value={availability}
          onChange={setAvailability}
          options={["All", "AVAILABLE", "COMING_SOON", "ON_REQUEST", "SOLD"]}
        />
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted">
          No vehicles match these filters. Adjust your selection or request a
          vehicle.
        </p>
      ) : null}
    </div>
  );
}

function Filter({
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
      <span className="text-[11px] tracking-[0.22em] text-silver uppercase">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full appearance-none border-0 border-b border-white/20 bg-transparent py-2 text-sm"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-black">
            {opt.replaceAll("_", " ")}
          </option>
        ))}
      </select>
    </label>
  );
}
