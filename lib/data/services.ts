import {
    Construction,
    Droplets,
    Flame,
    Pickaxe,
    Filter,
    Building2,
} from "lucide-react";

import { Service } from "../types/service";

export const services: Service[] = [
    {
    slug: "drain-cleaning",

    title: "Drain Cleaning",

    shortDescription:
        "Professional drain cleaning for homes and businesses throughout Philadelphia.",

    heroDescription:
        "From slow drains to recurring clogs and main sewer backups, Philadelphia Plumbing Services provides fast, professional drain cleaning using modern equipment and proven techniques.",

    seoTitle:
        "Drain Cleaning Philadelphia | Philadelphia Plumbing Services",

    metaDescription:
        "Professional drain cleaning, sewer cleaning, hydro jetting and camera inspections throughout Philadelphia.",

    image: "/images/services/drain-cleaning.jpg",

    icon: Construction,

    featured: false,

    benefits: [
        "Fast response times",
        "Camera inspections",
        "Hydro jetting available",
        "Residential & commercial service",
    ],

    process: [
  {
    title: "Inspect",
    description:
      "We evaluate the symptoms and determine where the blockage is located."
  },
  {
    title: "Diagnose",
    description:
      "If needed, we use professional equipment to identify the cause of the clog."
  },
  {
    title: "Clear",
    description:
      "We remove the blockage using the safest and most effective method."
  },
  {
    title: "Test",
    description:
      "We verify proper drainage and ensure the line is flowing correctly."
  },
  {
    title: "Prevent",
    description:
      "We explain what caused the issue and provide tips to help prevent future clogs."
  }
],

    problems: [
        "Slow draining sinks",
        "Recurring clogs",
        "Kitchen drain blockages",
        "Main sewer backups",
    ],

    faqs: [
        {
            question: "How long does drain cleaning take?",
            answer:
                "Most residential drain cleaning appointments are completed within one to two hours depending on the blockage.",
        },
        {
            question: "Do you offer hydro jetting?",
            answer:
                "Yes. Hydro jetting is available when appropriate to thoroughly clean drain and sewer lines.",
        },
    ],
},
    // {
    //     title: "Water Services",
    //     description:
    //         "Water service repair and replacement from the street to your home or business.",
    //     href: "/services/water-services",
    //     icon: Droplets,
    // },
    // {
    //     title: "Water Heaters",
    //     description:
    //         "Installation and replacement of traditional and tankless water heaters.",
    //     href: "/services/water-heaters",
    //     icon: Flame,
    // },
    // {
    //     title: "Excavation",
    //     description:
    //         "Safe excavation for underground water lines, sewer repairs, and utility work.",
    //     href: "/services/excavation",
    //     icon: Pickaxe,
    // },
    // {
    //     title: "Water Filtration",
    //     description:
    //         "Whole-home filtration systems that improve water quality and protect your plumbing.",
    //     href: "/services/filtration",
    //     icon: Filter,
    // },
    // {
    //     title: "Residential & Commercial",
    //     description:
    //         "Reliable plumbing solutions for homeowners, businesses, and property managers.",
    //     href: "/services",
    //     icon: Building2,
    // },
];