"use client";

export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.22em] text-silver uppercase">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-0 border-b border-white/20 bg-transparent py-3 text-sm text-foreground placeholder:text-white/25"
      />
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </label>
  );
}

export function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.22em] text-silver uppercase">
        {label}
        {required ? " *" : ""}
      </span>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full appearance-none border-0 border-b border-white/20 bg-transparent py-3 text-sm text-foreground"
      >
        <option value="" className="bg-black">
          Select
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-black">
            {opt}
          </option>
        ))}
      </select>
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </label>
  );
}

export function TextAreaField({
  label,
  name,
  value,
  onChange,
  error,
  required,
  rows = 4,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.22em] text-silver uppercase">
        {label}
        {required ? " *" : ""}
      </span>
      <textarea
        name={name}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full resize-y border-0 border-b border-white/20 bg-transparent py-3 text-sm text-foreground"
      />
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </label>
  );
}

export function SubmitButton({
  loading,
  children,
}: {
  loading: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="inline-flex items-center justify-center bg-foreground px-8 py-4 text-[11px] tracking-[0.22em] text-background uppercase transition-colors hover:bg-silver disabled:opacity-60"
    >
      {loading ? "Sending…" : children}
    </button>
  );
}

export function FormStatus({
  status,
  success,
  error,
}: {
  status: "idle" | "loading" | "success" | "error";
  success: string;
  error?: string;
}) {
  if (status === "success") {
    return <p className="text-sm leading-7 text-silver">{success}</p>;
  }
  if (status === "error") {
    return (
      <p className="text-sm text-red-400">
        {error ?? "Something went wrong. Please try again."}
      </p>
    );
  }
  return null;
}
