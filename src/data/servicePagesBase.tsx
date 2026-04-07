import { assetUrl } from "../lib/assets";

export type ServicePage = {
  slug: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  color: string;
  lightColor: string;
  badgeColor: string;
  borderColor: string;
  intro: string[];
  benefitsTitle: string;
  benefits: string[];
  expertiseTitle: string;
  expertiseDescription: string;
  capacityTitle: string;
  capacityDescription: string;
  capacitySupport: string;
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "setor-alimenticio",
    title: "Setor alimentÃ­cio",
    badge: "AlimentÃ­cio",
    description:
      "Empresas do setor alimentÃ­cio, hortifruti e supermercadistas que utilizam caixas plÃ¡sticas em seus processos precisam garantir limpeza, higienizaÃ§Ã£o e sanitizaÃ§Ã£o com padrÃ£o profissional.",
    image: assetUrl("images/servicos/setor-alimenticio.jpg"),
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-700",
    borderColor: "border-emerald-200",
    intro: [
      "Empresas do setor alimentÃ­cio, hortifruti e supermercadistas que utilizam caixas plÃ¡sticas em seus processos e que prezam pela qualidade de seus produtos transportados, devem se preocupar tambÃ©m com a limpeza, higienizaÃ§Ã£o e sanitizaÃ§Ã£o de suas caixas plÃ¡sticas.",
      "Contratar uma empresa especializada para a realizaÃ§Ã£o do ServiÃ§o de HigienizaÃ§Ã£o de Caixas para o setor alimentÃ­cio pode trazer muitas vantagens e, alÃ©m disso, economias considerÃ¡veis.",
    ],
    benefitsTitle: "Vantagens para o setor alimentÃ­cio",
    benefits: [
      "Economia de Ãgua, Energia ElÃ©trica e principalmente EspaÃ§o Interno.",
      "Contar com MÃ£o de obra especializada.",
      "IsenÃ§Ã£o de documentaÃ§Ãµes exigidas pela legislaÃ§Ã£o e de Controle de Produtos QuÃ­micos.",
      "Garantia do Descarte e tratamento de resÃ­duos de forma adequada.",
      "Custo zero de ManutenÃ§Ã£o de mÃ¡quinas e equipamentos.",
      "EmissÃ£o de Laudos de HigienizaÃ§Ã£o e Comprovantes de SanitizaÃ§Ã£o.",
    ],
    expertiseTitle: "A Vitaliza Ã© uma empresa especializada em HigienizaÃ§Ã£o de Caixas para o setor alimentÃ­cio",
    expertiseDescription:
      "SÃ£o mais de 13 anos atuando exclusivamente nesse segmento sempre agindo com as melhores prÃ¡ticas ambientais, com processos automatizados que garantem a qualidade que vocÃª e o seu cliente precisam ter.",
    capacityTitle: "Infraestrutura adequada para qualquer tamanho de processo",
    capacityDescription:
      "A Vitaliza tem capacidade para atender todos os tamanhos de demanda.",
    capacitySupport:
      "Se a sua empresa tem processos que envolvam pequenas, medias ou grandes quantidades, nossa equipe sempre atenderÃ¡ suas necessidades de forma personalizada.",
  },
  {
    slug: "setor-automotivo-sistemista-industrial",
    title: "Setor automotivo, sistemista e industrial",
    badge: "Automotivo",
    description:
      "Empresas automotivas, sistemistas e industriais que utilizam caixas plÃ¡sticas em seus processos precisam controlar a limpeza, higienizaÃ§Ã£o e principalmente a remoÃ§Ã£o de resÃ­duos oleosos.",
    image: assetUrl("images/servicos/setor-automotivo.png"),
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
    borderColor: "border-blue-200",
    intro: [
      "Empresas do setor Automotivo, Sistemista e Industrial que utilizam caixas plÃ¡sticas em seus processos e que prezam pela qualidade de seus produtos transportados, devem se preocupar tambÃ©m com a limpeza, higienizaÃ§Ã£o e principalmente remoÃ§Ã£o de resÃ­duos oleosos.",
      "Contratar uma empresa especializada para a realizaÃ§Ã£o do ServiÃ§o de HigienizaÃ§Ã£o de Caixas plÃ¡sticas para o setor Automotivo pode trazer muitas vantagens e, alÃ©m disso, economias considerÃ¡veis.",
    ],
    benefitsTitle: "Vantagens para o setor automotivo, sistemista e industrial",
    benefits: [
      "Economia de Ãgua, Energia ElÃ©trica e principalmente EspaÃ§o Interno.",
      "Contar com MÃ£o de obra especializada.",
      "IsenÃ§Ã£o de documentaÃ§Ãµes exigidas pela legislaÃ§Ã£o e de Controle de Produtos QuÃ­micos.",
      "Garantia do Descarte e tratamento de resÃ­duos de forma adequada.",
      "Custo zero de ManutenÃ§Ã£o de mÃ¡quinas e equipamentos.",
      "EmissÃ£o de Laudos de HigienizaÃ§Ã£o e Comprovantes de SanitizaÃ§Ã£o.",
    ],
    expertiseTitle: "A Vitaliza Ã© uma empresa especializada em HigienizaÃ§Ã£o de Caixas para o setor Automotivo, Sistemista e Industrial",
    expertiseDescription:
      "SÃ£o mais de 13 anos atuando exclusivamente nesse segmento sempre agindo com as melhores prÃ¡ticas ambientais, com processos automatizados que garantem a qualidade que vocÃª e o seu cliente precisam ter.",
    capacityTitle: "Infraestrutura adequada para qualquer tamanho de processo",
    capacityDescription:
      "A Vitaliza tem capacidade para atender todos os tamanhos de demanda.",
    capacitySupport:
      "Se a sua empresa tem processos que envolvam pequenas, medias ou grandes quantidades, nossa equipe sempre atenderÃ¡ suas necessidades de forma personalizada.",
  },
  {
    slug: "setor-hospital-farmaceutico",
    title: "Setor hospitalar e farmacÃªutico",
    badge: "Hospitalar e FarmacÃªutico",
    description:
      "Empresas do setor hospitalar e farmacÃªutico que utilizam caixas ou estrados plÃ¡sticos em seus processos precisam assegurar limpeza, higienizaÃ§Ã£o e sanitizaÃ§Ã£o com alto nÃ­vel de controle.",
    image: assetUrl("images/servicos/setor-hospital-farmaceutico.jpg"),
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50",
    badgeColor: "bg-violet-100 text-violet-700",
    borderColor: "border-violet-200",
    intro: [
      "Empresas do setor Hospitalar e FarmacÃªutico que utilizam caixas ou estrados plÃ¡sticos em seus processos e que prezam pela qualidade de seus produtos transportados, devem se preocupar tambÃ©m com a limpeza, higienizaÃ§Ã£o e sanitizaÃ§Ã£o de suas caixas plÃ¡sticas.",
      "Contratar uma empresa especializada para a realizaÃ§Ã£o do ServiÃ§o de HigienizaÃ§Ã£o de Caixas para o setor da SaÃºde pode trazer muitas vantagens e, alÃ©m disso, economias considerÃ¡veis.",
    ],
    benefitsTitle: "Vantagens para o setor hospitalar e farmacÃªutico",
    benefits: [
      "Economia de Ãgua, Energia ElÃ©trica e principalmente EspaÃ§o Interno.",
      "Contar com MÃ£o de obra especializada.",
      "IsenÃ§Ã£o de documentaÃ§Ãµes exigidas pela legislaÃ§Ã£o e de Controle de Produtos QuÃ­micos.",
      "Garantia do Descarte e tratamento de resÃ­duos de forma adequada.",
      "Custo zero de ManutenÃ§Ã£o de mÃ¡quinas e equipamentos.",
      "EmissÃ£o de Laudos de HigienizaÃ§Ã£o e Comprovantes de SanitizaÃ§Ã£o.",
    ],
    expertiseTitle: "A Vitaliza Ã© uma empresa especializada em HigienizaÃ§Ã£o de Caixas para o setor Hospitalar e FarmacÃªutico",
    expertiseDescription:
      "SÃ£o mais de 13 anos atuando exclusivamente nesse segmento sempre agindo com as melhores prÃ¡ticas ambientais, com processos automatizados que garantem a qualidade que vocÃª e o seu cliente precisam ter.",
    capacityTitle: "Infraestrutura adequada para qualquer tamanho de processo",
    capacityDescription:
      "A Vitaliza tem capacidade para atender todos os tamanhos de demanda.",
    capacitySupport:
      "Se a sua empresa tem processos que envolvam pequenas, medias ou grandes quantidades, nossa equipe sempre atenderÃ¡ suas necessidades de forma personalizada.",
  },
];

export const SERVICE_PAGES_BY_SLUG = Object.fromEntries(
  SERVICE_PAGES.map((service) => [service.slug, service]),
) as Record<string, ServicePage>;
