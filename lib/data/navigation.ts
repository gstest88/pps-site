import { NavigationItem } from "../types/navigation";
import { routes } from "@/lib/routes";

export const navigation: NavigationItem[] = [
    {
        label: "Services",
        href: routes.services.root,
    },
    {
        label: "About",
        href: routes.about,
    },
    {
        label: "Contact",
        href: routes.contact,
    },
];