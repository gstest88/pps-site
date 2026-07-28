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
        title: "Drain Cleaning",
        description:
            "Professional drain cleaning, camera inspections, and hydro jetting to restore proper flow.",
        href: "/services/drain-cleaning",
        icon: Construction,
    },
    {
        title: "Water Services",
        description:
            "Water service repair and replacement from the street to your home or business.",
        href: "/services/water-services",
        icon: Droplets,
    },
    {
        title: "Water Heaters",
        description:
            "Installation and replacement of traditional and tankless water heaters.",
        href: "/services/water-heaters",
        icon: Flame,
    },
    {
        title: "Excavation",
        description:
            "Safe excavation for underground water lines, sewer repairs, and utility work.",
        href: "/services/excavation",
        icon: Pickaxe,
    },
    {
        title: "Water Filtration",
        description:
            "Whole-home filtration systems that improve water quality and protect your plumbing.",
        href: "/services/filtration",
        icon: Filter,
    },
    {
        title: "Residential & Commercial",
        description:
            "Reliable plumbing solutions for homeowners, businesses, and property managers.",
        href: "/services",
        icon: Building2,
    },
];