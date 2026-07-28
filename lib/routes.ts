// ********* connected with navigation.ts **********

const SERVICES_ROOT = "/services";

export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",

  services: {
    root: SERVICES_ROOT,
    detail: (slug: string) => `${SERVICES_ROOT}/${slug}`,
  },
} as const;