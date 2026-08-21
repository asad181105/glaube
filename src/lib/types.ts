export type VehicleStatus = "AVAILABLE" | "COMING_SOON" | "ON_REQUEST" | "SOLD";

export type VehicleType =
  | "SUV"
  | "Sports Car"
  | "Supercar"
  | "Luxury Sedan"
  | "Muscle Car"
  | "Performance"
  | "Custom Build";

export type Market =
  | "India"
  | "UAE"
  | "USA"
  | "Europe"
  | "United Kingdom"
  | "Japan"
  | "Other";

export interface VehicleImage {
  id: string;
  vehicleId: string;
  url: string;
  alt: string;
  sortOrder: number;
}

export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  type: VehicleType;
  location: string;
  originMarket: Market;
  status: VehicleStatus;
  overview: string;
  engine: string;
  transmission: string;
  power: string;
  drivetrain: string;
  exterior: string;
  interior: string;
  featured: boolean;
  priceOnRequest: boolean;
  images: VehicleImage[];
}

export type InquiryService =
  | "Buy a Vehicle"
  | "Sell a Vehicle"
  | "Source a Vehicle"
  | "Import Assistance"
  | "Customization"
  | "Parts & Body Kits"
  | "Partnership";

export interface Inquiry {
  id?: string;
  name: string;
  phone: string;
  email: string;
  location?: string;
  service?: InquiryService | string;
  vehicleName?: string;
  message: string;
  source: "contact" | "vehicle" | "cta";
}

export interface SourcingRequest {
  id?: string;
  name: string;
  phone: string;
  email: string;
  vehicleBrand: string;
  vehicleModel: string;
  preferredYear: string;
  budgetRange: string;
  preferredMarket: string;
  condition: "New" | "Pre-Owned";
  additionalRequirements: string;
}

export interface CustomBuildRequest {
  id?: string;
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  modificationRequired: string;
  budget: string;
  description: string;
}

export interface VehicleRequest {
  id?: string;
  name: string;
  phone: string;
  email: string;
  brand: string;
  model: string;
  vehicleType: string;
  budget: string;
  preferredYear: string;
  preferredMarket: string;
  condition: "New" | "Pre-Owned";
  customizationRequired: "Yes" | "No";
  additionalRequirements: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
