import { assetUrl } from "../lib/assets";

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
    menuLabel: "Setor alimentÃ­cio",
    title: "Setor alimentÃ­cio",
    description:
      "A higienizaÃ§Ã£o de contentores Ã© um procedimento fundamental para evitar a contaminaÃ§Ã£o nos produtos transportados e eliminar fungos, pragas e bactÃ©rias. A Vitaliza Clean apresenta soluÃ§Ãµes especializadas para operaÃ§Ãµes alimentÃ­cias e supermercadistas.",
    image: assetUrl("images/food-crates.jpg"),
    badge: "AlimentÃ­cio",
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-700",
    borderColor: "border-emerald-200",
    highlights: [
      "Lavagem e sanitizaÃ§Ã£o de caixas plÃ¡sticas, pallets e contentores retornÃ¡veis.",
      "ReduÃ§Ã£o do risco de contaminaÃ§Ã£o cruzada em centros de distribuiÃ§Ã£o e supermercados.",
      "Processo padronizado para operaÃ§Ãµes com alta rotatividade logÃ­stica.",
    ],
    applications: [
      "IndÃºstrias alimentÃ­cias",
      "Supermercados e atacarejos",
      "Centros de distribuiÃ§Ã£o refrigerados",
    ],
  },
  {
    id: "automotiva",
    slug: "setor-automotivo-sistemista-industrial",
    menuLabel: "Setor automotivo, sistemista e industrial",
    title: "Setor automotivo, sistemista e industrial",
    description:
      "O mercado de autopeÃ§as exige eficiÃªncia logÃ­stica e baixo custo operacional. A Vitaliza Clean contribui significativamente na reduÃ§Ã£o da aquisiÃ§Ã£o de novas embalagens plÃ¡sticas, revitalizando com qualidade os contentores usados.",
    image: assetUrl("images/automotive-klt.jpg"),
    badge: "Automotivo",
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
    borderColor: "border-blue-200",
    highlights: [
      "HigienizaÃ§Ã£o tÃ©cnica de caixas KLT, bins, pallets e contentores industriais.",
      "PadronizaÃ§Ã£o visual e funcional para retorno rÃ¡pido Ã  linha de produÃ§Ã£o.",
      "Aumento da vida Ãºtil das embalagens com reduÃ§Ã£o de custos de reposiÃ§Ã£o.",
    ],
    applications: [
      "Montadoras",
      "Sistemistas e autopeÃ§as",
      "OperaÃ§Ãµes industriais e logÃ­sticas",
    ],
  },
  {
    id: "farmaceutica",
    slug: "setor-hospital-farmaceutico",
    menuLabel: "Setor hospital e farmacÃªutico",
    title: "Setor hospital e farmacÃªutico",
    description:
      "A higienizaÃ§Ã£o de contentores, pallets e estrados Ã© fundamental para evitar contaminaÃ§Ã£o nos produtos armazenados. A Vitaliza Clean atua neste mercado com resultados altamente satisfatÃ³rios para hospitais, laboratÃ³rios e grandes indÃºstrias farmacÃªuticas.",
    image: assetUrl("images/pharma-crates.jpg"),
    badge: "Hospitalar e FarmacÃªutico",
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50",
    badgeColor: "bg-violet-100 text-violet-700",
    borderColor: "border-violet-200",
    highlights: [
      "SanitizaÃ§Ã£o criteriosa para ambientes com alta exigÃªncia de controle.",
      "Processos voltados Ã  reduÃ§Ã£o de agentes contaminantes em embalagens retornÃ¡veis.",
      "Suporte confiÃ¡vel para fluxos hospitalares, laboratoriais e farmacÃªuticos.",
    ],
    applications: [
      "Hospitais e centros clÃ­nicos",
      "LaboratÃ³rios e distribuidores",
      "IndÃºstrias farmacÃªuticas",
    ],
  },
];

export const SERVICE_SECTORS_BY_SLUG = Object.fromEntries(
  SERVICE_SECTORS.map((service) => [service.slug, service]),
) as Record<string, ServiceSector>;
