"use client";

import { useMemo, useState } from "react";
import type { EnquiryRecord, EnquiryStatus } from "@/lib/data/mappers";

const statuses: EnquiryStatus[] = ["new", "reviewing", "contacted", "closed"];

export function EnquiryBoard({ initial }: { initial: EnquiryRecord[] }) {
  const [items, setItems] = useState(initial);
  const [kind, setKind] = useState("all");
  const [status, setStatus] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      items.filter((item) => {
        if (kind !== "all" && item.kind !== kind) return false;
        if (status !== "all" && item.status !== status) return false;
        return true;
      }),
    [items, kind, status],
  );

  async function patch(item: EnquiryRecord, next: Partial<EnquiryRecord>) {
    const res = await fetch("/api/admin/enquiries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: item.id,
        kind: item.kind,
        status: next.status ?? item.status,
        notes: next.notes ?? item.notes,
      }),
    });
    if (!res.ok) return;
    setItems((list) =>
      list.map((row) => (row.id === item.id ? { ...row, ...next } : row)),
    );
  }

  return (
    <div>
      <div className="grid gap-6 border border-white/10 bg-surface p-6 md:grid-cols-2">
        <label>
          <span className="text-[11px] tracking-[0.22em] text-silver uppercase">Type</span>
          <select
            value={kind}
            onChange={(e) => setKind(e.target.value)}
            className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-2"
          >
            <option value="all" className="bg-black">All</option>
            <option value="inquiry" className="bg-black">Contact / vehicle enquiry</option>
            <option value="sourcing" className="bg-black">Sourcing</option>
            <option value="build" className="bg-black">Build</option>
            <option value="vehicle" className="bg-black">Vehicle request</option>
          </select>
        </label>
        <label>
          <span className="text-[11px] tracking-[0.22em] text-silver uppercase">Status</span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-2"
          >
            <option value="all" className="bg-black">All</option>
            {statuses.map((s) => (
              <option key={s} value={s} className="bg-black">
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {filtered.map((item) => {
          const open = openId === `${item.kind}-${item.id}`;
          return (
            <article key={`${item.kind}-${item.id}`} className="py-6">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left"
                    onClick={() => setOpenId(open ? null : `${item.kind}-${item.id}`)}
              >
                <div>
                  <p className="text-[11px] tracking-[0.22em] text-gold uppercase">
                    {item.kind} · {item.status}
                  </p>
                  <h2 className="mt-2 text-xl">{item.name}</h2>
                  <p className="mt-1 text-sm text-muted">{item.summary}</p>
                </div>
                <p className="text-xs text-muted">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </button>
              {open ? (
                <div className="mt-6 grid gap-8 lg:grid-cols-2">
                  <dl className="space-y-3 text-sm">
                    <div>
                      <dt className="text-[11px] tracking-[0.18em] text-silver uppercase">Phone</dt>
                      <dd>{item.phone}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] tracking-[0.18em] text-silver uppercase">Email</dt>
                      <dd>{item.email}</dd>
                    </div>
                    {Object.entries(item.details).map(([k, v]) =>
                      v ? (
                        <div key={k}>
                          <dt className="text-[11px] tracking-[0.18em] text-silver uppercase">{k}</dt>
                          <dd className="mt-1 text-muted">{v}</dd>
                        </div>
                      ) : null,
                    )}
                  </dl>
                  <div className="space-y-6">
                    <label className="block">
                      <span className="text-[11px] tracking-[0.18em] text-silver uppercase">Status</span>
                      <select
                        value={item.status}
                        onChange={(e) =>
                          patch(item, { status: e.target.value as EnquiryStatus })
                        }
                        className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-2"
                      >
                        {statuses.map((s) => (
                          <option key={s} value={s} className="bg-black">
                            {s}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className="text-[11px] tracking-[0.18em] text-silver uppercase">Internal notes</span>
                      <textarea
                        defaultValue={item.notes}
                        onBlur={(e) => patch(item, { notes: e.target.value })}
                        rows={5}
                        className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-2 text-sm"
                      />
                    </label>
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-12 text-sm text-muted">No enquiries in this view.</p>
      ) : null}
    </div>
  );
}
