import type { Market, Vehicle, VehicleStatus, VehicleType } from "@/lib/types";

const U = (id: string, w = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

function img(vehicleId: string, url: string, alt: string, sortOrder: number) {
  return { id: `${vehicleId}-${sortOrder}`, vehicleId, url, alt, sortOrder };
}

function v(input: {
  id: string;
  slug: string;
  brand: string;
  model: string;
  year: number;
  type: VehicleType;
  location?: string;
  originMarket: Market;
  status: VehicleStatus;
  featured?: boolean;
  overview: string;
  engine: string;
  transmission: string;
  power: string;
  drivetrain: string;
  exterior: string;
  interior: string;
  images: { url: string; alt: string }[];
}): Vehicle {
  return {
    ...input,
    location: input.location ?? "On Request",
    featured: input.featured ?? false,
    priceOnRequest: true,
    images: input.images.map((image, i) =>
      img(input.id, image.url, image.alt, i),
    ),
  };
}

/**
 * Curated inventory. Image URLs are Unsplash photos whose titles/captions
 * match the listed model (verified against Unsplash listing copy).
 */
export const catalog: Vehicle[] = [
  v({
    id: "v-mustang-gt",
    slug: "ford-mustang-gt",
    brand: "Ford",
    model: "Mustang GT",
    year: 2024,
    type: "Muscle Car",
    originMarket: "USA",
    status: "ON_REQUEST",
    featured: true,
    overview:
      "An American performance icon with presence, sound and character. Sourced to specification for clients who want a modern muscle car.",
    engine: "5.0L Coyote V8",
    transmission: "10-speed automatic / 6-speed manual on request",
    power: "Up to 480 hp (specification dependent)",
    drivetrain: "Rear-wheel drive",
    exterior: "Performance styling, optional dark packages",
    interior: "Sport seats, driver-focused cockpit",
    images: [
      { url: U("photo-1494905998402-395d579af36f"), alt: "Ford Mustang GT" },
    ],
  }),
  v({
    id: "v-gt500",
    slug: "ford-mustang-shelby-gt500",
    brand: "Ford",
    model: "Mustang Shelby GT500",
    year: 2022,
    type: "Muscle Car",
    originMarket: "USA",
    status: "ON_REQUEST",
    overview:
      "The supercharged Shelby — for clients who want the most formidable modern Mustang.",
    engine: "5.2L supercharged V8",
    transmission: "Tremec 7-speed dual-clutch",
    power: "760 hp",
    drivetrain: "Rear-wheel drive",
    exterior: "Shelby aero, wide stance",
    interior: "Performance Recaro seating",
    images: [
      {
        url: U("photo-1753475788416-7fdc3c266c2f"),
        alt: "Ford Mustang Shelby GT500",
      },
    ],
  }),
  v({
    id: "v-g63",
    slug: "mercedes-amg-g63",
    brand: "Mercedes-AMG",
    model: "G63",
    year: 2024,
    type: "SUV",
    originMarket: "Europe",
    status: "ON_REQUEST",
    featured: true,
    overview:
      "The G-Class in its most formidable AMG form. A statement of presence as a city icon or a long-distance luxury machine.",
    engine: "4.0L biturbo V8",
    transmission: "AMG SPEEDSHIFT TCT 9G",
    power: "585 hp",
    drivetrain: "Permanent all-wheel drive",
    exterior: "Iconic boxy G-Class silhouette, AMG styling",
    interior: "Nappa leather, luxury appointments",
    images: [
      {
        url: U("photo-1747567847488-0ffce2adf955"),
        alt: "Mercedes-Benz G-Class",
      },
    ],
  }),
  v({
    id: "v-amg-gt",
    slug: "mercedes-amg-gt",
    brand: "Mercedes-AMG",
    model: "GT",
    year: 2023,
    type: "Sports Car",
    originMarket: "Europe",
    status: "ON_REQUEST",
    overview:
      "A front-engined AMG GT with presence and a theatre that belongs on a grand-touring brief.",
    engine: "4.0L biturbo V8",
    transmission: "AMG SPEEDSHIFT DCT",
    power: "Specification dependent",
    drivetrain: "Rear-wheel drive",
    exterior: "Long bonnet, muscular haunches",
    interior: "Race-inspired luxury cockpit",
    images: [
      { url: U("photo-1618843479313-40f8afb4b4d8"), alt: "Mercedes-AMG GT" },
    ],
  }),
  v({
    id: "v-escalade",
    slug: "cadillac-escalade",
    brand: "Cadillac",
    model: "Escalade",
    year: 2024,
    type: "SUV",
    originMarket: "USA",
    status: "COMING_SOON",
    featured: true,
    overview:
      "American luxury at full scale. Presence, technology and a first-class cabin for clients who want an unmistakable SUV.",
    engine: "6.2L V8",
    transmission: "10-speed automatic",
    power: "420 hp",
    drivetrain: "RWD / 4WD",
    exterior: "Bold vertical lighting, commanding stance",
    interior: "AKG audio, executive rear seating options",
    images: [
      {
        url: U("photo-1735620731955-b047a7122892"),
        alt: "Cadillac Escalade",
      },
      {
        url: U("photo-1683778547049-8d969766b441", 1600),
        alt: "Cadillac Escalade at night",
      },
      {
        url: U("photo-1758216991743-110e7a093f29", 1600),
        alt: "Cadillac Escalade on highway",
      },
    ],
  }),
  v({
    id: "v-urus",
    slug: "lamborghini-urus",
    brand: "Lamborghini",
    model: "Urus",
    year: 2023,
    type: "SUV",
    originMarket: "Europe",
    status: "ON_REQUEST",
    featured: true,
    overview:
      "A super-SUV that does not dilute the Lamborghini character. Exotic performance with everyday usability.",
    engine: "4.0L twin-turbo V8",
    transmission: "8-speed automatic",
    power: "657 hp",
    drivetrain: "All-wheel drive",
    exterior: "Y-signature lighting, athletic SUV architecture",
    interior: "Alcantara and leather, sport seats",
    images: [
      {
        url: U("photo-1748189285388-c8852b6a7ed6"),
        alt: "Black Lamborghini Urus",
      },
    ],
  }),
  v({
    id: "v-aventador",
    slug: "lamborghini-aventador",
    brand: "Lamborghini",
    model: "Aventador",
    year: 2022,
    type: "Supercar",
    originMarket: "Europe",
    status: "ON_REQUEST",
    featured: true,
    overview:
      "V12 theatre. Sourced for clients who want a flagship Lamborghini with unmistakable presence.",
    engine: "6.5L naturally aspirated V12",
    transmission: "ISR 7-speed",
    power: "Up to 769 hp (SVJ dependent)",
    drivetrain: "All-wheel drive",
    exterior: "Scissor doors, aggressive aero",
    interior: "Carbon and Alcantara cockpit",
    images: [
      {
        url: U("photo-1612825173281-9a193378527e"),
        alt: "Orange Lamborghini Aventador",
      },
      {
        url: U("photo-1618846042668-eda9c8261189", 1600),
        alt: "Green Lamborghini Aventador",
      },
      {
        url: U("photo-1596711715198-16788fb84007", 1600),
        alt: "Yellow Lamborghini Aventador",
      },
    ],
  }),
  v({
    id: "v-huracan",
    slug: "lamborghini-huracan",
    brand: "Lamborghini",
    model: "Huracán",
    year: 2023,
    type: "Supercar",
    originMarket: "Europe",
    status: "AVAILABLE",
    overview:
      "The more useable Lamborghini supercar — sourced to the right EVO or Tecnica specification.",
    engine: "5.2L naturally aspirated V10",
    transmission: "7-speed dual-clutch",
    power: "Up to 640 hp",
    drivetrain: "RWD or AWD",
    exterior: "Hexagonal lighting, taut proportions",
    interior: "Driver-focused sport cabin",
    images: [
      {
        url: U("photo-1617650728468-8581e439c864"),
        alt: "Green Lamborghini Huracán",
      },
      {
        url: U("photo-1544636331-e26879cd4d9b", 1600),
        alt: "Lamborghini supercar",
      },
    ],
  }),
  v({
    id: "v-911",
    slug: "porsche-911",
    brand: "Porsche",
    model: "911",
    year: 2024,
    type: "Sports Car",
    originMarket: "Europe",
    status: "AVAILABLE",
    featured: true,
    overview:
      "The definitive sports car. Sourced to specification — Carrera, GTS or Turbo — depending on how the client intends to drive.",
    engine: "3.0L twin-turbo flat-six (variant dependent)",
    transmission: "PDK / 7-speed manual on select variants",
    power: "Specification dependent",
    drivetrain: "RWD or AWD",
    exterior: "Timeless 911 silhouette",
    interior: "Driver-centric, Sport Chrono options",
    images: [
      { url: U("photo-1503376780353-7e6692767b70"), alt: "Porsche 911" },
      {
        url: U("photo-1621135802920-133df287f89c", 1600),
        alt: "Blue Porsche 911",
      },
      {
        url: U("photo-1621285853634-713b8dd6b5fd", 1600),
        alt: "White Porsche 911",
      },
    ],
  }),
  v({
    id: "v-ferrari-458",
    slug: "ferrari-458-italia",
    brand: "Ferrari",
    model: "458 Italia",
    year: 2015,
    type: "Supercar",
    originMarket: "Europe",
    status: "ON_REQUEST",
    overview:
      "A naturally aspirated V8 Ferrari with a soundtrack that still defines the modern era. Sourced as a collector-grade grand tourer.",
    engine: "4.5L naturally aspirated V8",
    transmission: "7-speed dual-clutch",
    power: "562 hp",
    drivetrain: "Rear-wheel drive",
    exterior: "Pininfarina sculpture, flying buttresses",
    interior: "Carbon-backed sport seats",
    images: [
      {
        url: U("photo-1618846446712-a4eda2adc05f"),
        alt: "Yellow Ferrari 458 Italia",
      },
      {
        url: U("photo-1621688285733-07fad23b81c7", 1600),
        alt: "Ferrari 458 Italia",
      },
      {
        url: U("photo-1583121274602-3e2820c69888", 1600),
        alt: "Red Ferrari",
      },
    ],
  }),
  v({
    id: "v-bmw-m4",
    slug: "bmw-m4",
    brand: "BMW",
    model: "M4",
    year: 2024,
    type: "Performance",
    originMarket: "Europe",
    status: "AVAILABLE",
    overview:
      "A modern M car with daily usability and serious performance — Competition specification on request.",
    engine: "3.0L twin-turbo inline-six",
    transmission: "8-speed M Steptronic / 6-speed manual on select markets",
    power: "Up to 523 hp (Competition xDrive)",
    drivetrain: "RWD or M xDrive",
    exterior: "M kidney grille, aggressive coupe stance",
    interior: "M sport seats, carbon trim",
    images: [
      { url: U("photo-1555215695-3004980ad54e"), alt: "BMW M4 Coupe" },
    ],
  }),
  v({
    id: "v-audi-r8",
    slug: "audi-r8",
    brand: "Audi",
    model: "R8",
    year: 2023,
    type: "Supercar",
    originMarket: "Europe",
    status: "ON_REQUEST",
    overview:
      "Mid-engined V10 presence with quattro composure. A supercar that still feels considered.",
    engine: "5.2L naturally aspirated V10",
    transmission: "7-speed S tronic",
    power: "Up to 602 hp",
    drivetrain: "Quattro all-wheel drive",
    exterior: "Sideblade architecture, LED signature",
    interior: "Virtual cockpit, sport bucket seats",
    images: [
      { url: U("photo-1492144534655-ae79c964c9d7"), alt: "Audi R8" },
    ],
  }),
  v({
    id: "v-gtr",
    slug: "nissan-gt-r",
    brand: "Nissan",
    model: "GT-R",
    year: 2023,
    type: "Performance",
    originMarket: "Japan",
    status: "ON_REQUEST",
    overview:
      "Godzilla. A Japanese performance legend sourced for clients who want AWD theatre and engineering density.",
    engine: "3.8L twin-turbo V6",
    transmission: "6-speed dual-clutch",
    power: "565 hp+",
    drivetrain: "ATTESA E-TS all-wheel drive",
    exterior: "Iconic GT-R haunches",
    interior: "Driver-focused, Recaro options",
    images: [
      {
        url: U("photo-1516711711315-a8f3875eb838"),
        alt: "Nissan GT-R",
      },
    ],
  }),
  v({
    id: "v-range-rover",
    slug: "range-rover",
    brand: "Land Rover",
    model: "Range Rover",
    year: 2024,
    type: "SUV",
    originMarket: "United Kingdom",
    status: "AVAILABLE",
    featured: true,
    overview:
      "The reference luxury SUV. Sourced for presence, ride quality and a cabin that feels like a private lounge.",
    engine: "Specification dependent (P400 / P530 / PHEV)",
    transmission: "8-speed automatic",
    power: "Specification dependent",
    drivetrain: "Intelligent all-wheel drive",
    exterior: "Flush surfaces, floating roof",
    interior: "Executive Class seating options",
    images: [
      {
        url: U("photo-1519641471654-76ce0107ad1b"),
        alt: "Range Rover",
      },
    ],
  }),
  v({
    id: "v-cullinan",
    slug: "rolls-royce-cullinan",
    brand: "Rolls-Royce",
    model: "Cullinan",
    year: 2023,
    type: "SUV",
    originMarket: "United Kingdom",
    status: "ON_REQUEST",
    overview:
      "Effortless luxury in SUV form. For clients who want the Rolls-Royce experience without compromising space.",
    engine: "6.75L twin-turbo V12",
    transmission: "8-speed automatic",
    power: "563 hp",
    drivetrain: "All-wheel drive",
    exterior: "Pantheon grille, commanding SUV architecture",
    interior: "Bespoke Rolls-Royce cabin",
    images: [
      {
        url: U("photo-1687634365887-59ab132a31b5"),
        alt: "Rolls-Royce Cullinan",
      },
    ],
  }),
  v({
    id: "v-mclaren-765lt",
    slug: "mclaren-765lt",
    brand: "McLaren",
    model: "765LT",
    year: 2022,
    type: "Supercar",
    originMarket: "United Kingdom",
    status: "ON_REQUEST",
    overview:
      "A Longtail McLaren — lighter, louder and more focused than the 720S it is built from.",
    engine: "4.0L twin-turbo V8",
    transmission: "7-speed SSG",
    power: "755 hp",
    drivetrain: "Rear-wheel drive",
    exterior: "Longtail aero, dihedral doors",
    interior: "Carbon racing seats, Alcantara",
    images: [
      {
        url: U("photo-1775311742973-b8f5d701af74"),
        alt: "Orange McLaren 765LT",
      },
      {
        url: U("photo-1760689029558-500081eb2bf7", 1600),
        alt: "McLaren supercar with doors open",
      },
    ],
  }),
  v({
    id: "v-continental-gt",
    slug: "bentley-continental-gt",
    brand: "Bentley",
    model: "Continental GT",
    year: 2023,
    type: "Sports Car",
    originMarket: "United Kingdom",
    status: "ON_REQUEST",
    overview:
      "Grand touring in the British sense — power, craft and a cabin meant for continents, not just corners.",
    engine: "4.0L twin-turbo V8 / 6.0L W12 (market dependent)",
    transmission: "8-speed dual-clutch",
    power: "Specification dependent",
    drivetrain: "All-wheel drive",
    exterior: "Muscular GT proportions, matrix lighting",
    interior: "Hand-finished leather and wood",
    images: [
      {
        url: U("photo-1760381558154-0887c4539467"),
        alt: "Bentley Continental GT",
      },
      {
        url: U("photo-1729513151104-ac4676c8d885", 1600),
        alt: "Bentley Continental GT rear",
      },
    ],
  }),
  v({
    id: "v-camaro",
    slug: "chevrolet-camaro",
    brand: "Chevrolet",
    model: "Camaro",
    year: 2023,
    type: "Muscle Car",
    originMarket: "USA",
    status: "ON_REQUEST",
    overview:
      "American muscle with a more aggressive visual stance. SS or ZL1 specification on request.",
    engine: "6.2L V8 (SS / ZL1 supercharged)",
    transmission: "Automatic or manual",
    power: "Specification dependent",
    drivetrain: "Rear-wheel drive",
    exterior: "Wide coupe, hidden DRLs",
    interior: "Performance seats, driver-centric dash",
    images: [
      {
        url: U("photo-1589148820843-5fc6217d9d93"),
        alt: "Chevrolet Camaro",
      },
    ],
  }),
  v({
    id: "v-wrangler",
    slug: "jeep-wrangler",
    brand: "Jeep",
    model: "Wrangler",
    year: 2024,
    type: "SUV",
    originMarket: "USA",
    status: "AVAILABLE",
    overview:
      "Open-air capability with global demand. Rubicon or Sahara specification sourced to the client brief.",
    engine: "3.6L V6 / 2.0L turbo / 3.0L diesel (market dependent)",
    transmission: "8-speed automatic",
    power: "Specification dependent",
    drivetrain: "4x4",
    exterior: "Removable panels, seven-slot grille",
    interior: "Rugged-luxe cabin options",
    images: [
      {
        url: U("photo-1533473359331-0135ef1b58bf"),
        alt: "Jeep Wrangler",
      },
    ],
  }),
  v({
    id: "v-bespoke-mansory-urus",
    slug: "bespoke-mansory-urus",
    brand: "Bespoke",
    model: "Mansory Urus Programme",
    year: 2024,
    type: "Custom Build",
    location: "Studio",
    originMarket: "Europe",
    status: "ON_REQUEST",
    featured: true,
    overview:
      "A commissioned Urus programme in the spirit of Mansory Venatus — carbon, colour and presence specified around the client, not a catalogue.",
    engine: "Base Urus twin-turbo V8, tune on request",
    transmission: "8-speed automatic",
    power: "OEM or enhanced",
    drivetrain: "All-wheel drive",
    exterior: "Carbon bodywork, custom colour, forged wheels",
    interior: "Bespoke leather and contrast stitching",
    images: [
      {
        url: U("photo-1745196063148-9fa42ef04672"),
        alt: "Mansory Lamborghini Urus Venatus",
      },
    ],
  }),
  v({
    id: "v-bespoke-widebody",
    slug: "bespoke-widebody-lamborghini",
    brand: "Bespoke",
    model: "Widebody Lamborghini",
    year: 2024,
    type: "Custom Build",
    location: "Studio",
    originMarket: "Other",
    status: "COMING_SOON",
    overview:
      "A widebody Lamborghini programme — stance, carbon, wheels and finish specified as a one-off.",
    engine: "Base vehicle dependent",
    transmission: "Base vehicle dependent",
    power: "OEM or tuned",
    drivetrain: "Base vehicle dependent",
    exterior: "Widebody kit, custom paint, forged wheels",
    interior: "Alcantara and contrast detailing",
    images: [
      {
        url: U("photo-1633650911415-5c6891611a09"),
        alt: "Gold and black widebody Lamborghini",
      },
      {
        url: U("photo-1633650915549-f69463863651", 1600),
        alt: "Custom widebody Lamborghini",
      },
    ],
  }),
  v({
    id: "v-bespoke-range-rover",
    slug: "bespoke-matte-range-rover",
    brand: "Bespoke",
    model: "Matte Range Rover",
    year: 2024,
    type: "Custom Build",
    location: "Studio",
    originMarket: "United Kingdom",
    status: "ON_REQUEST",
    overview:
      "A Range Rover with a commissioned wrap, wheels and cabin finishes — understated until it is not.",
    engine: "Base Range Rover specification",
    transmission: "8-speed automatic",
    power: "Base vehicle dependent",
    drivetrain: "All-wheel drive",
    exterior: "Matte wrap, custom wheels, black-line detailing",
    interior: "Bespoke upholstery and ambient lighting",
    images: [
      {
        url: U("photo-1699079203316-be468a6919dc"),
        alt: "Custom matte black Range Rover",
      },
    ],
  }),
];
