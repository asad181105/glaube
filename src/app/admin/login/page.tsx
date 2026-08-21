import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <section className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <p className="text-[11px] tracking-[0.32em] text-gold uppercase">Glaube Exotics</p>
      <h1 className="mt-4 text-4xl">Admin</h1>
      <p className="mt-4 mb-10 text-sm text-muted">
        Private console for enquiries and inventory.
      </p>
      <AdminLoginForm />
    </section>
  );
}
