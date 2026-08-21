/**
 * Suggested Supabase data model.
 *
 * Replace mock loaders in `src/lib/data/*` with Supabase queries
 * while keeping these table shapes.
 *
 * vehicles
 *  id uuid pk default uuid_generate_v4()
 *  slug text unique not null
 *  brand text not null
 *  model text not null
 *  year int not null
 *  type text not null
 *  location text not null
 *  origin_market text
 *  status text not null -- AVAILABLE | COMING_SOON | ON_REQUEST | SOLD
 *  overview text
 *  engine text
 *  transmission text
 *  power text
 *  drivetrain text
 *  exterior text
 *  interior text
 *  featured boolean default false
 *  price_on_request boolean default true
 *  created_at timestamptz default now()
 *
 * vehicle_images
 *  id uuid pk
 *  vehicle_id uuid references vehicles(id) on delete cascade
 *  url text not null
 *  alt text
 *  sort_order int default 0
 *
 * inquiries
 *  id uuid pk
 *  name text not null
 *  phone text not null
 *  email text not null
 *  location text
 *  service text
 *  vehicle_name text
 *  message text
 *  source text
 *  created_at timestamptz default now()
 *
 * sourcing_requests
 *  id uuid pk
 *  name text not null
 *  phone text not null
 *  email text not null
 *  vehicle_brand text
 *  vehicle_model text
 *  preferred_year text
 *  budget_range text
 *  preferred_market text
 *  condition text
 *  additional_requirements text
 *  created_at timestamptz default now()
 *
 * custom_build_requests
 *  id uuid pk
 *  name text not null
 *  phone text not null
 *  email text not null
 *  vehicle text
 *  modification_required text
 *  budget text
 *  description text
 *  created_at timestamptz default now()
 *
 * vehicle_requests
 *  id uuid pk
 *  name, phone, email, brand, model, vehicle_type, budget,
 *  preferred_year, preferred_market, condition,
 *  customization_required, additional_requirements
 *  created_at timestamptz
 */

export const SUPABASE_TABLES = [
  "vehicles",
  "vehicle_images",
  "inquiries",
  "sourcing_requests",
  "custom_build_requests",
  "vehicle_requests",
] as const;
