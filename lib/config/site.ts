import { navigation } from "../data/navigation";
import { services } from "../data/services";

export const site = {
    name: "Philadelphia Plumbing Services",

    shortName: "PPS",

    phone: "(215) 555-1234",

    email: "info@philadelphiaplumbingservices.com",

    address: "Philadelphia, PA",

    navigation,

    services,

    socials: {
        facebook: "",
        google: "",
    },
} as const;