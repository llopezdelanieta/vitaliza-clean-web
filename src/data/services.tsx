export type ServiceSector = {
  id: string;
  slug: string;
  menuLabel: string;
  title: string;
  description: string;
  image: string;
  badge: string;
  color: string;
  lightColor: string;
  badgeColor: string;
  borderColor: string;
  highlights: string[];
  applications: string[];
};

export const SERVICE_SECTORS: ServiceSector[] = [
  {
    id: "alimenticia",
    slug: "setor-alimenticio",
    menuLabel: "Setor alimentício",
    title: "Setor alimentício",
    description:
      "A higienização de contentores é um procedimento fundamental para evitar a contaminação nos produtos transportados e eliminar fungos, pragas e bactérias. A Vitaliza Clean apresenta soluções especializadas para operações alimentícias e supermercadistas.",
    image: "/images/food-crates.jpg",
    badge: "Alimentício",
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-700",
    borderColor: "border-emerald-200",
    highlights: [
      "Lavagem e sanitização de caixas plásticas, pallets e contentores retornáveis.",
      "Redução do risco de contaminação cruzada em centros de distribuição e supermercados.",
      "Processo padronizado para operações com alta rotatividade logística.",
    ],
    applications: [
      "Indústrias alimentícias",
      "Supermercados e atacarejos",
      "Centros de distribuição refrigerados",
    ],
  },
  {
    id: "automotiva",
    slug: "setor-automotivo-sistemista-industrial",
    menuLabel: "Setor automotivo, sistemista e industrial",
    title: "Setor automotivo, sistemista e industrial",
    description:
      "O mercado de autopeças exige eficiência logística e baixo custo operacional. A Vitaliza Clean contribui significativamente na redução da aquisição de novas embalagens plásticas, revitalizando com qualidade os contentores usados.",
    image: "/images/automotive-klt.jpg",
    badge: "Automotivo",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
    borderColor: "border-blue-200",
    highlights: [
      "Higienização técnica de caixas KLT, bins, pallets e contentores industriais.",
      "Padronização visual e funcional para retorno rápido à linha de produção.",
      "Aumento da vida útil das embalagens com redução de custos de reposição.",
    ],
    applications: [
      "Montadoras",
      "Sistemistas e autopeças",
      "Operações industriais e logísticas",
    ],
  },
  {
    id: "farmaceutica",
    slug: "setor-hospital-farmaceutico",
    menuLabel: "Setor hospital e farmacêutico",
    title: "Setor hospital e farmacêutico",
    description:
      "A higienização de contentores, pallets e estrados é fundamental para evitar contaminação nos produtos armazenados. A Vitaliza Clean atua neste mercado com resultados altamente satisfatórios para hospitais, laboratórios e grandes indústrias farmacêuticas.",
    image: "/images/pharma-crates.jpg",
    badge: "Hospitalar e Farmacêutico",
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50",
    badgeColor: "bg-violet-100 text-violet-700",
    borderColor: "border-violet-200",
    highlights: [
      "Sanitização criteriosa para ambientes com alta exigência de controle.",
      "Processos voltados à redução de agentes contaminantes em embalagens retornáveis.",
      "Suporte confiável para fluxos hospitalares, laboratoriais e farmacêuticos.",
    ],
    applications: [
      "Hospitais e centros clínicos",
      "Laboratórios e distribuidores",
      "Indústrias farmacêuticas",
    ],
  },
];

export const SERVICE_SECTORS_BY_SLUG = Object.fromEntries(
  SERVICE_SECTORS.map((service) => [service.slug, service]),
) as Record<string, ServiceSector>;
