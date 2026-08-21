-- Glaube Exotics schema
-- Paste into Supabase SQL Editor and run once.

create extension if not exists "pgcrypto";

create table if not exists public.vehicles (
  id text primary key,
  slug text unique not null,
  brand text not null,
  model text not null,
  year int not null,
  type text not null,
  location text not null default 'On Request',
  origin_market text,
  status text not null default 'ON_REQUEST',
  overview text,
  engine text,
  transmission text,
  power text,
  drivetrain text,
  exterior text,
  interior text,
  featured boolean default false,
  price_on_request boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.vehicle_images (
  id text primary key,
  vehicle_id text not null references public.vehicles(id) on delete cascade,
  url text not null,
  alt text,
  sort_order int default 0
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  location text,
  service text,
  vehicle_name text,
  message text,
  source text,
  status text not null default 'new',
  notes text not null default '',
  created_at timestamptz default now()
);

create table if not exists public.sourcing_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  vehicle_brand text,
  vehicle_model text,
  preferred_year text,
  budget_range text,
  preferred_market text,
  condition text,
  additional_requirements text,
  status text not null default 'new',
  notes text not null default '',
  created_at timestamptz default now()
);

create table if not exists public.custom_build_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  vehicle text,
  modification_required text,
  budget text,
  description text,
  status text not null default 'new',
  notes text not null default '',
  created_at timestamptz default now()
);

create table if not exists public.vehicle_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  brand text,
  model text,
  vehicle_type text,
  budget text,
  preferred_year text,
  preferred_market text,
  condition text,
  customization_required text,
  additional_requirements text,
  status text not null default 'new',
  notes text not null default '',
  created_at timestamptz default now()
);

alter table public.vehicles enable row level security;
alter table public.vehicle_images enable row level security;
alter table public.inquiries enable row level security;
alter table public.sourcing_requests enable row level security;
alter table public.custom_build_requests enable row level security;
alter table public.vehicle_requests enable row level security;

drop policy if exists "public read vehicles" on public.vehicles;
create policy "public read vehicles" on public.vehicles
  for select using (true);

drop policy if exists "public read vehicle images" on public.vehicle_images;
create policy "public read vehicle images" on public.vehicle_images
  for select using (true);

drop policy if exists "public insert inquiries" on public.inquiries;
create policy "public insert inquiries" on public.inquiries
  for insert with check (true);

drop policy if exists "public insert sourcing" on public.sourcing_requests;
create policy "public insert sourcing" on public.sourcing_requests
  for insert with check (true);

drop policy if exists "public insert builds" on public.custom_build_requests;
create policy "public insert builds" on public.custom_build_requests
  for insert with check (true);

drop policy if exists "public insert vehicle requests" on public.vehicle_requests;
create policy "public insert vehicle requests" on public.vehicle_requests
  for insert with check (true);
