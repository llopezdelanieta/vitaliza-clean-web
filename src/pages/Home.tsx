import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { CLIENTS } from "../data/clients";
import { assetUrl } from "../lib/assets";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Clientes", href: "#clientes" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Nossa História", href: "/nossa-historia" },
  { label: "Por que nós?", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const CLIENT_FILTERS = ["Todos", "Alimentício", "Automotivo", "Sistemista", "Industrial", "Hospitalar", "Farmacêutico"];

const FEATURED_ALL_CLIENT_NAMES = [
  "Marelli",
  "Scania",
  "Hospital das Clínicas",
  "Johnson & Johnson",
  "Colgate-Palmolive",
  "Aisin",
  "Acrilex",
  "Oba Hortifruti",
  "Natural da Terra",
  "Oggi Sorvetes",
];

/* const LEGACY_CLIENTS = [
  { name: "Carrefour", logo: "🛒", segment: "Alimentício" },
  { name: "Extra", logo: "🏪", segment: "Alimentício" },
  { name: "Pão de Açúcar", logo: "🛍️", segment: "Alimentício" },
  { name: "Toyota", logo: "🚗", segment: "Automotivo" },
  { name: "Volkswagen", logo: "🚙", segment: "Automotivo" },
  { name: "General Motors", logo: "🏭", segment: "Automotivo" },
  { name: "EMS", logo: "💊", segment: "Farmacêutico" },
  { name: "Hypera Pharma", logo: "⚕️", segment: "Farmacêutico" },
]; */

const DEFAULT_CONTACT_MESSAGE = `Nome da sua empresa
Cidade ou localização
Segmento de atuação
Modelos das Caixas utilizadas (Se possível com medidas)

Descreva sua necesidade...`;

const WHATSAPP_NUMBER = "(11) 4054-2722";
const SECONDARY_PHONE_NUMBER = "(11) 2309-2644";
const WHATSAPP_LINK = "https://wa.me/551140542722";
const DUNSGUIDE_URL = "https://www.dunsguide.com/pt/company/b9f516e5c3e42af28089423776fbeda5/m-g-rodrigues-higienizacao-de-caixas-plasticas-ltda";
const INSTAGRAM_URL = "https://www.instagram.com/vitalizaplast?igsh=MWFhcWU0eDF5cW9zag==";
const LINKEDIN_URL = "https://www.linkedin.com/company/vitalizaclean/posts/?feedView=all";

const SERVICES = [
  {
    id: "alimenticia",
    slug: "setor-alimenticio",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Linha Alimentícia e Supermercadistas",
    description:
      "A higienização de contentores é um procedimento fundamental para evitar a contaminação nos produtos transportados e eliminar fungos, pragas e bactérias. A Vitaliza Clean apresenta as melhores soluções para o setor de alimentos.",
    image: assetUrl("images/food-crates.jpg"),
    badge: "Alimentício",
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-700",
    borderColor: "border-emerald-200",
  },
  {
    id: "automotiva",
    slug: "setor-automotivo-sistemista-industrial",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Linha Automotiva e Sistemistas",
    description:
      "O mercado de autopeças exige eficiência logística e baixo custo operacional. A Vitaliza Clean contribui significativamente na redução de aquisição de novas embalagens plásticas, revitalizando com qualidade os contentores usados.",
    image: assetUrl("images/automotive-klt.jpg"),
    badge: "Automotivo",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    id: "farmaceutica",
    slug: "setor-hospital-farmaceutico",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Linha Farmacêutica e Saúde",
    description:
      "A higienização de contentores, pallets e estrados é fundamental para evitar contaminação nos produtos armazenados. A Vitaliza Clean atua neste mercado com resultados altamente satisfatórios para grandes indústrias farmacêuticas.",
    image: assetUrl("images/pharma-crates.jpg"),
    badge: "Farmacêutico",
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50",
    badgeColor: "bg-violet-100 text-violet-700",
    borderColor: "border-violet-200",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Coleta",
    description: "Realizamos a coleta dos contentores plásticos diretamente no seu estabelecimento, com logística eficiente e organizada.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Triagem",
    description: "Identificamos e classificamos os contentores por tipo, material e nível de sujidade para o processo ideal de limpeza.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Lavagem",
    description: "Aplicamos processos de lavagem de alta pressão com produtos químicos certificados, eliminando 99,9% de contaminantes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Higienização",
    description: "Realizamos a sanitização completa, garantindo a eliminação de fungos, bactérias e demais agentes contaminantes.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Secagem",
    description: "Processo de secagem industrial garante que os contentores estejam completamente secos e prontos para uso imediato.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "Entrega",
    description: "Devolvemos os contentores higienizados e prontos para uso, dentro do prazo acordado, diretamente em sua empresa.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

const DIFFERENTIALS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Certificação e Qualidade",
    description: "Processos certificados e produtos químicos homologados garantem a mais alta qualidade na higienização.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Agilidade no Atendimento",
    description: "Cumprimos prazos rigorosos para que sua operação não pare. Logística eficiente de coleta e entrega.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Redução de Custos",
    description: "Revitalize seus contentores em vez de comprar novos. Economia real para o seu negócio.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Sustentabilidade",
    description: "Contribuímos para a redução de resíduos plásticos, prolongando a vida útil dos contentores e protegendo o meio ambiente.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Equipe Especializada",
    description: "Profissionais treinados e qualificados para oferecer o melhor serviço com segurança e eficiência.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Rastreabilidade",
    description: "Controle total do processo com rastreabilidade dos lotes, garantindo transparência e segurança para sua empresa.",
  },
];

const STATS = [
  { value: "99,9%", label: "Eficiência na higienização" },  
  { value: "+35", label: "Clientes Atendidos" },
  { value: "100%", label: "Comprometimento" },
  { value: "+10", label: "Anos de Experiência" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [showAllClients, setShowAllClients] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: DEFAULT_CONTACT_MESSAGE, segment: "" });
  const [formSent, setFormSent] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const featuredClients = FEATURED_ALL_CLIENT_NAMES
    .map((name) => CLIENTS.find((client) => client.name === name))
    .filter((client): client is (typeof CLIENTS)[number] => Boolean(client));

  const filteredClients = activeFilter === "Todos"
    ? (showAllClients ? CLIENTS : featuredClients)
    : CLIENTS.filter((c) => c.segment === activeFilter);
    
  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash]);
  useEffect(() => {
    if (activeFilter !== "Todos") {
      setShowAllClients(false);
    }
  }, [activeFilter]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname === "/" && location.hash === href) {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        return;
      }

      navigate(
        { pathname: "/", hash: href },
        { replace: location.pathname === "/" },
      );

      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
    setFormData({ name: "", email: "", phone: "", message: DEFAULT_CONTACT_MESSAGE, segment: "" });
  };

  return (
    <div className="font-['Inter',sans-serif] bg-white text-gray-900 overflow-x-hidden">
      <SiteHeader transparentOnHome />

      {/* HERO */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={assetUrl("images/hero-bg.jpg")} alt="Lavagem de caixas plásticas" className="w-full h-full object-cover" />
          <img src={assetUrl("images/inicio_background.jpg")} alt="Processo de higienização de caixas plásticas" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,47,73,0.92),rgba(14,116,144,0.78),rgba(37,99,235,0.72))]" />
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-cyan-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Especialistas em Higienização Industrial
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Lavagem e Higienização
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mt-1">
              de Caixas Plásticas
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">
            A <strong className="text-white">Vitaliza Clean</strong> oferece soluções completas de limpeza e higienização de caixas plásticas dos mais variados setores, com tecnologia de ponta e máxima eficiência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavClick("#contato")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-base rounded-2xl shadow-2xl shadow-blue-900/50 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
            >
              Solicitar Orçamento Grátis
            </button>
            <button
              onClick={() => handleNavClick("#servicos")}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-base rounded-2xl hover:bg-white/20 transition-all duration-200"
            >
              Conheça nossos serviços
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
            <span className="text-xs tracking-widest uppercase">Role para baixo</span>
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
                <div className="text-cyan-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUNSGUIDE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-[linear-gradient(135deg,#f4fbff_0%,#ffffff_45%,#eef7ff_100%)] p-8 shadow-2xl shadow-cyan-100/70 md:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-100/50 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div className="flex justify-center">
                <div className="rounded-[1.75rem] border border-white bg-white/90 p-6 shadow-xl shadow-cyan-100/80">
                  <img
                    src={assetUrl("images/dunsregistered.webp")}
                    alt="Selo D-U-N-S Registered"
                    className="mx-auto h-auto w-full max-w-[320px] object-contain"
                  />
                </div>
              </div>

              <div>
                <span className="inline-flex rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-700">
                  Credibilidade e visibilidade internacional
                </span>
                <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-4xl">
                  Vitaliza Clean na <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">DUNSguide</span>
                </h2>
                <p className="mt-6 max-w-3xl text-justify text-lg leading-relaxed text-slate-600">
                  A VITALIZACLEAN tem o orgulho de integrar o mais avançado mecanismo de pesquisa B2B da América Latina, aliando visibilidade e credibilidade a uma certificação que atesta nossa excelência e compromisso com resultados.
                </p>
                <div className="mt-8">
                  <a
                    href={DUNSGUIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-200/70 transition-transform hover:scale-[1.02]"
                  >
                    Acessar nossa página na DUNSguide
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section id="clientes" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Nossos Clientes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Empresas que Confiam na{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Vitaliza Clean
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 text-lg">
              Atendemos grandes marcas dos setores alimentício, automotivo e farmacêutico, entregando qualidade e confiabilidade em cada serviço.
            </p>
          </div>

          {/* Filtro por segmento */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CLIENT_FILTERS.map((seg) => (
              <button
                key={seg}
                onClick={() => {
                  setActiveFilter(seg);
                  if (seg === "Todos") {
                    setShowAllClients(false);
                  }
                }}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer hover:scale-105 ${
                  activeFilter === seg
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-md shadow-blue-300/40"
                    : "bg-white text-gray-600 border-gray-200 hover:border-cyan-300 hover:text-cyan-600"
                }`}
              >
                {seg}
              </button>
            ))}
          </div>

          {/* Cards dos clientes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
            {filteredClients.map((client, i) => (
              <div
                key={i}
                className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-blue-100/50 hover:border-cyan-200 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-24 w-full items-center justify-center rounded-2xl border border-gray-100 bg-white p-4 shadow-sm group-hover:scale-[1.02] transition-transform duration-300">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="max-h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900 text-sm">{client.name}</p>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                    client.segment === "Alimentício" ? "bg-emerald-100 text-emerald-700" :
                    client.segment === "Automotivo" ? "bg-blue-100 text-blue-700" :
                    client.segment === "Sistemista" ? "bg-sky-100 text-sky-700" :
                    client.segment === "Industrial" ? "bg-amber-100 text-amber-700" :
                    client.segment === "Hospitalar" ? "bg-rose-100 text-rose-700" :
                    "bg-violet-100 text-violet-700"
                  }`}>
                    {client.segment}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {activeFilter === "Todos" && (
            <div className="mb-16 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllClients((current) => !current)}
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-200 bg-cyan-50 px-6 py-3 text-sm font-semibold text-cyan-700 transition-all duration-200 hover:bg-cyan-100 hover:shadow-md"
              >
                {showAllClients ? "Ver menos clientes" : "Ver todos os clientes"}
                <svg
                  className={`h-4 w-4 transition-transform ${showAllClients ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}

          {/* Depoimento / destaque */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl shadow-blue-200">
            <div className="text-5xl mb-4">⭐⭐⭐⭐⭐</div>
            <blockquote className="text-xl md:text-2xl font-medium italic mb-6 max-w-3xl mx-auto leading-relaxed">
              "A Vitaliza Clean transformou nossa logística de higienização. Reduzimos custos em 40% e nunca tivemos problemas de contaminação desde que iniciamos a parceria."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-xl">👤</div>
              <div className="text-left">
                <p className="font-bold text-white">Gerente de Logística</p>
                <p className="text-cyan-200 text-sm">Indústria Alimentícia — SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-4">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Segmentos que Atendemos
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 text-lg">
              Soluções especializadas de higienização para diferentes mercados, com processos adaptados às necessidades de cada setor.
            </p>
          </div>
          <div className="space-y-8">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/60 border ${service.borderColor} bg-white`}
              >
                <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40`} />
                </div>
                <div className={`lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center ${service.lightColor}`}>
                  <span className={`inline-flex items-center gap-2 px-3 py-1 ${service.badgeColor} text-xs font-bold rounded-full w-fit mb-4 uppercase tracking-wider`}>
                    {service.badge}
                  </span>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-5 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Link
                      to={`/servicos/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition-all duration-200 hover:border-cyan-300 hover:text-cyan-700 hover:shadow-md"
                    >
                      Saiba mais
                    </Link>
                    <button
                      onClick={() => handleNavClick("#contato")}
                      className={`inline-flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl w-fit hover:shadow-lg hover:scale-105 transition-all duration-200`}
                    >
                      Solicitar orçamento
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Como Trabalhamos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Nosso Processo
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 text-lg">
              Um processo completo e eficiente, do início ao fim, garantindo a máxima qualidade na higienização dos seus contentores.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative group">
                <div className="p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-200 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-black text-gray-100 group-hover:text-blue-100 transition-colors leading-none pt-1">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WASH IMAGE BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={assetUrl("images/washing-process.jpg")} alt="Processo de lavagem" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-cyan-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Tecnologia de Ponta na
            <span className="block text-cyan-300">Higienização Industrial</span>
          </h2>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg mb-10">
            Equipamentos modernos de lavagem de alta pressão, soluções químicas certificadas e processos controlados para garantir a máxima eficiência e segurança.
          </p>
          <button
            onClick={() => handleNavClick("#contato")}
            className="px-8 py-4 bg-white text-blue-700 font-bold text-base rounded-2xl hover:bg-cyan-50 hover:scale-105 transition-all duration-200 shadow-xl"
          >
            Entre em contato agora
          </button>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section id="diferenciais" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
              Nossos Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Por que escolher a Vitaliza Clean?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 text-lg">
              Mais do que um serviço, somos parceiros no sucesso da sua operação logística.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIALS.map((diff, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-xl hover:shadow-gray-200/60 hover:border-cyan-200 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center mb-5 shadow-md shadow-blue-200 group-hover:scale-110 transition-transform">
                  {diff.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{diff.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-4">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Solicite um{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Orçamento
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Entre em contato conosco e descubra como a Vitaliza Clean pode otimizar a higienização dos seus contentores plásticos com qualidade e eficiência.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start mb-10">
            {/* Left Info */}
            <div>
              <div className="space-y-4 mb-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "WhatsApp",
                    value: WHATSAPP_NUMBER,
                    sub: "",                    
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Telefone",
                    value: SECONDARY_PHONE_NUMBER,
                    sub: "",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "E-mail",
                    value: "contato@vitalizaplast.com.br",
                    sub: "",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Endereço",
                    value: "Av. Afonso Monteiro da Cruz, 948 — Serraria, Diadema - SP",
                    sub: "Galpão industrial de 4.000m²",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "Horário de Atendimento",
                    value: "Segunda a Sexta: 08h às 18h",
                    sub: "Sábado: 08h às 12h",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-200">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-gray-900 font-semibold">{item.value}</div>
                      {item.sub && <div className="text-gray-500 text-sm">{item.sub}</div>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">
                  Redes sociais
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 text-white shadow-md shadow-pink-200"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="5" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-md shadow-blue-200"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.38 1.56 1.56 0 0 1 6.94 8.5ZM5.5 9.75h2.88V18H5.5V9.75Zm4.68 0h2.76v1.13h.04c.38-.73 1.33-1.5 2.75-1.5 2.95 0 3.49 1.94 3.49 4.46V18h-2.88v-3.67c0-.88-.02-2.01-1.22-2.01-1.22 0-1.41.95-1.41 1.94V18h-2.88V9.75Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-2xl shadow-lg shadow-green-300/40 hover:scale-105 hover:shadow-green-400/50 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-6 md:p-7 border border-gray-100 shadow-xl shadow-gray-100/50">
              {formSent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-500">Entraremos em contato em breve. Obrigado!</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Envie sua mensagem</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Nome completo *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                        placeholder="(11) 99999-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Segmento</label>
                    <select
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                    >
                      <option value="">Selecione seu segmento</option>
                      <option value="alimenticio">Alimentício / Supermercadista</option>
                      <option value="automotivo">Automotivo / Sistemistas</option>
                      <option value="farmaceutico">Farmacêutico / Saúde</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensagem *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                      placeholder="Descreva sua necessidade..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-300/40 hover:shadow-blue-400/50 hover:scale-[1.02] transition-all duration-200"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* GOOGLE MAPS */}
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/80 border border-gray-100">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-3 flex-1">
                <svg className="w-5 h-5 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-white font-bold text-sm">Nossa Localização — Galpão de 4.000m²</p>
                  <p className="text-cyan-200 text-xs">Av. Afonso Monteiro da Cruz, 948 — Serraria, Diadema - SP</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Av.+Afonso+Monteiro+da+Cruz,+948,+Serraria,+Diadema,+SP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-xs font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir no Maps
              </a>
            </div>
            <iframe
              title="Localização Vitaliza Clean"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.1!2d-46.6213!3d-23.6868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQxJzEyLjUiUyA0NsKwMzcnMTYuNyJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=Av.+Afonso+Monteiro+da+Cruz,+948,+Serraria,+Diadema,+SP,+Brasil"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={assetUrl("images/logotipo_100x100.png")} alt="Vitaliza Plast" className="h-12" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {NAV_LINKS.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </button>
                )
              ))}
            </div>
            <div className="text-sm text-center">
              © {new Date().getFullYear()} Vitaliza Clean. Todos os direitos reservados.
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
            Lavagem e higienização profissional de caixas plásticas para os setores alimentício, automotivo e farmacêutico.
            <br />
            Av. Afonso Monteiro da Cruz, 948 — Serraria, Diadema - SP
          </div>
        </div>
      </footer>
    </div>
  );
}
