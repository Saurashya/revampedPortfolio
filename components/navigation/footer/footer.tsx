import Socials from "@/components/ui/socials";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="mt-20 border-t border-border px-5 pb-10 pt-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="max-w-sm">
          <p className="text-xl font-semibold text-primary-foreground">
            Saurashya Rayamajhi
          </p>
          <p className="mt-2 text-sm leading-relaxed text-secondary-foreground">
            Full-Stack Developer & MERN Instructor crafting scalable,
            high-performance web experiences.
          </p>
        </div>

        <nav className="flex flex-col items-center gap-2 md:items-start">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-secondary-foreground transition-colors hover:text-primary-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <Socials />
          <p className="text-sm text-secondary-foreground">
            Based in Kathmandu, Nepal
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center text-xs text-secondary-foreground">
        © {new Date().getFullYear()} Saurashya Rayamajhi. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
