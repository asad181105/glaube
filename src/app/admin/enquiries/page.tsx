import { EnquiryBoard } from "@/components/admin/EnquiryBoard";
import { listEnquiries } from "@/lib/data/admin";
import type { EnquiryRecord } from "@/lib/data/mappers";

export const dynamic = "force-dynamic";

export default async function EnquiriesPage() {
  let enquiries: EnquiryRecord[] = [];
  let error = "";
  try {
    enquiries = await listEnquiries();
  } catch (e) {
    error = e instanceof Error ? e.message : "Could not load enquiries.";
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-4xl">Enquiries</h1>
      <p className="mt-4 mb-12 max-w-2xl text-sm text-muted">
        Contact forms, sourcing briefs, build requests and vehicle requests in one
        place. Update status and keep internal notes.
      </p>
      {error ? <p className="text-sm text-red-400">{error}</p> : <EnquiryBoard initial={enquiries} />}
    </section>
  );
}
