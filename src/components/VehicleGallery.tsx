"use client";

import { useState } from "react";
import Image from "next/image";
import type { VehicleImage } from "@/lib/types";

export function VehicleGallery({ images }: { images: VehicleImage[] }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  if (!current) return null;

  return (
    <div>
      <div className="relative aspect-[16/9] overflow-hidden border border-white/10">
        <Image
          src={current.url}
          alt={current.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-4 grid grid-cols-4 gap-3">
          {images.map((img, i) => (
            <button
              key={img.id}
              type="button"
              onClick={() => setActive(i)}
              className={`relative aspect-[16/10] overflow-hidden border ${
                i === active ? "border-gold" : "border-white/10"
              }`}
            >
              <Image src={img.url} alt={img.alt} fill className="object-cover" sizes="200px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
