export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isPhone(value: string) {
  return /^[\d+\-\s()]{8,20}$/.test(value.trim());
}

export function required(value: string, label: string) {
  if (!value.trim()) return `${label} is required.`;
  return "";
}

export type FieldErrors = Record<string, string>;

export function validateContact(input: {
  name: string;
  phone: string;
  email: string;
  message?: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  const name = required(input.name, "Name");
  if (name) errors.name = name;
  const phone = required(input.phone, "Phone");
  if (phone) errors.phone = phone;
  else if (!isPhone(input.phone)) errors.phone = "Enter a valid phone number.";
  const email = required(input.email, "Email");
  if (email) errors.email = email;
  else if (!isEmail(input.email)) errors.email = "Enter a valid email address.";
  return errors;
}
