import { useEffect, useId, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { SERVICE_SECTORS } from "../data/services";
import { assetUrl } from "../lib/assets";

type SiteHeaderProps = {
  transparentOnHome?: boolean;
};

const SECTION_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Clientes", href: "#clientes" },
  { label: "Processo", href: "#processo" },
  { label: "Por que nós?", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function SiteHeader({ transparentOnHome = false }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const servicesMenuId = useId();
  const desktopDropdownRef = useRef<HTMLDivElement | null>(null);

  const isHome = location.pathname === "/";
  const solidHeader = scrolled || !transparentOnHome || !isHome;
  const isServicesRoute = location.pathname.startsWith("/servicos/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!desktopDropdownRef.current?.contains(event.target as Node)) {
        setDesktopServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const navigateToSection = (hash: string) => {
    setMenuOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);

    if (location.pathname === "/" && location.hash === hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate({ pathname: "/", hash }, { replace: location.pathname === "/" });

    if (location.pathname === "/") {
      window.setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  };

  const navigateToHistory = () => {
    setMenuOpen(false);
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);

    if (location.pathname === "/nossa-historia") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const desktopLinkClass = `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
    solidHeader
      ? "text-gray-600 hover:text-cyan-600 hover:bg-cyan-50"
      : "text-white/80 hover:text-white hover:bg-white/10"
  }`;

  const desktopActiveClass = solidHeader ? "text-cyan-600 bg-cyan-50" : "text-white bg-white/15";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidHeader
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={() => navigateToSection("#inicio")}
            className="flex items-center group"
            aria-label="Ir para o início"
          >
            <img
              src={assetUrl("images/logotipo_100x100.png")}
              alt="Vitaliza Clean"
              className="h-[4.5rem] w-[4.5rem] object-contain"
            />
          </button>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {SECTION_LINKS.slice(0, 2).map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigateToSection(link.href)}
                className={desktopLinkClass}
              >
                {link.label}
              </button>
            ))}

            <div
              ref={desktopDropdownRef}
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button
                type="button"
                aria-expanded={desktopServicesOpen}
                aria-controls={servicesMenuId}
                aria-haspopup="menu"
                className={`${desktopLinkClass} ${isServicesRoute ? desktopActiveClass : ""}`}
                onClick={() => setDesktopServicesOpen((current) => !current)}
                onFocus={() => setDesktopServicesOpen(true)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    setDesktopServicesOpen(false);
                  }
                }}
              >
                <span className="inline-flex items-center gap-2">
                  Serviços
                  <svg
                    className={`w-4 h-4 transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {desktopServicesOpen && (
                <div className="absolute left-0 top-full w-80 pt-2">
                  <div
                    id={servicesMenuId}
                    role="menu"
                    aria-label="Submenu de serviços"
                    className="rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl shadow-gray-200/80"
                  >
                    {SERVICE_SECTORS.map((service) => (
                      <NavLink
                        key={service.slug}
                        to={`/servicos/${service.slug}`}
                        role="menuitem"
                        className={({ isActive }) =>
                          `block rounded-xl px-4 py-3 text-sm transition-colors ${
                            isActive
                              ? "bg-cyan-50 text-cyan-700"
                              : "text-gray-700 hover:bg-gray-50 hover:text-cyan-600"
                          }`
                        }
                      >
                        {service.menuLabel}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => navigateToSection("#processo")}
              className={desktopLinkClass}
            >
              Processo
            </button>

            <NavLink
              to="/nossa-historia"
              onClick={navigateToHistory}
              className={({ isActive }) =>
                `${desktopLinkClass} ${isActive ? desktopActiveClass : ""}`
              }
            >
              Nossa História
            </NavLink>

            {SECTION_LINKS.slice(3).map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigateToSection(link.href)}
                className={desktopLinkClass}
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => navigateToSection("#contato")}
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-300/40 hover:shadow-blue-400/50 hover:scale-105 transition-all duration-200"
            >
              Solicitar Orçamento
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-site-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              solidHeader ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-site-menu" className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="px-4 py-4 space-y-1" aria-label="Navegação móvel">
            {SECTION_LINKS.slice(0, 2).map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigateToSection(link.href)}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setMobileServicesOpen((current) => !current)}
              aria-expanded={mobileServicesOpen}
              aria-controls="mobile-services-menu"
              aria-haspopup="menu"
              className="flex w-full items-center justify-between px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
            >
              <span>Serviços</span>
              <svg
                className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div
                id="mobile-services-menu"
                role="menu"
                aria-label="Submenu de serviços"
                className="ml-3 space-y-1 border-l border-gray-200 pl-3"
              >
                {SERVICE_SECTORS.map((service) => (
                  <NavLink
                    key={service.slug}
                    to={`/servicos/${service.slug}`}
                    role="menuitem"
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-cyan-50 text-cyan-700"
                          : "text-gray-600 hover:bg-cyan-50 hover:text-cyan-600"
                      }`
                    }
                  >
                    {service.menuLabel}
                  </NavLink>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => navigateToSection("#processo")}
              className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
            >
              Processo
            </button>

            <NavLink
              to="/nossa-historia"
              onClick={navigateToHistory}
              className={({ isActive }) =>
                `block w-full px-4 py-3 rounded-xl font-medium transition-colors ${
                  isActive
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                }`
              }
            >
              Nossa História
            </NavLink>

            {SECTION_LINKS.slice(3).map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigateToSection(link.href)}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
              >
                {link.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => navigateToSection("#contato")}
              className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl"
            >
              Solicitar Orçamento
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
