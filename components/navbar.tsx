"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar glass">
      <a className="brand" href="#home" aria-label="Daffa Pratama home" onClick={() => setOpen(false)}>
        <span className="brand-mark">DP</span>
        <span>DAFFA PRATAMA</span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        <a className="nav-contact" href="#contact">Let&apos;s talk</a>
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      {open && (
        <nav className="mobile-menu glass" aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk</a>
        </nav>
      )}
    </header>
  );
}
