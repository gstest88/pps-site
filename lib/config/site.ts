import { navigation } from "../data/navigation";
import { services } from "../data/services";

export const site = {
    name: "Philadelphia Plumbing Services",


    company: {
        legalName: "Philadelphia Plumbing Services LLC",
        brandName: "Philadelphia Plumbing Services",
    },

    url: "https://philadelphiaplumbingservices.com",

    shortName: "PPS",

    phone: "(215) 555-1234",

    email: "info@philadelphiaplumbingservices.com",

    address: "Philadelphia, PA",

    navigation,

    services,

    serviceArea: "Philadelphia",

    state: "PA",

country: "US",

    socials: {
        facebook: "",
        google: "",
    },
} as const;