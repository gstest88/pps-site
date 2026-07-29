"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Logo from "./Logo";
import { site } from "../../../lib/config/site";
import { routes } from "@/lib/routes";

const links = site.navigation;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-24 items-center justify-between">
        <Logo />

        <nav className="hidden gap-10 text-sm font-medium text-slate-700 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#005A9C]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="text-right">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Call Today
            </p>

            <p className="font-semibold text-[#123B63]">{site.phone}</p>
          </div>

          <Button href={routes.contact}>Request Service</Button>
        </div>
      </Container>
    </header>
  );
}
