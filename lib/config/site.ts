import { navigation } from "../data/navigation";
import { services } from "../data/services";

export const site = {
  name: "Philadelphia Plumbing Services",

  company: {
    legalName: "Philadelphia Plumbing Services LLC",
    brandName: "Philadelphia Plumbing Services",
  },

  url: "https://phillyplumbingservices.com",

  shortName: "PPS",

  phone: "(267) 658-2239",

  email: "info@phillyplumbingservices.com",

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
