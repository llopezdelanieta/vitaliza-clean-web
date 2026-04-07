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
    title: "Setor alimentício",
    badge: "Alimentício",
    description:
      "Empresas do setor alimentício, hortifruti e supermercadistas que utilizam caixas plásticas em seus processos precisam garantir limpeza, higienização e sanitização com padrão profissional.",
    image: assetUrl("images/servicos/setor-alimenticio.jpg"),
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50",
    badgeColor: "bg-emerald-100 text-emerald-700",
    borderColor: "border-emerald-200",
    intro: [
      "Empresas do setor alimentício, hortifruti e supermercadistas que utilizam caixas plásticas em seus processos e que prezam pela qualidade de seus produtos transportados, devem se preocupar também com a limpeza, higienização e sanitização de suas caixas plásticas.",
      "Contratar uma empresa especializada para a realização do Serviço de Higienização de Caixas para o setor alimentício pode trazer muitas vantagens e, além disso, economias consideráveis.",
    ],
    benefitsTitle: "Vantagens para o setor alimentício",
    benefits: [
      "Economia de Água, Energia Elétrica e principalmente Espaço Interno.",
      "Contar com Mão de obra especializada.",
      "Isenção de documentações exigidas pela legislação e de Controle de Produtos Químicos.",
      "Garantia do Descarte e tratamento de resíduos de forma adequada.",
      "Custo zero de Manutenção de máquinas e equipamentos.",
      "Emissão de Laudos de Higienização e Comprovantes de Sanitização.",
    ],
    expertiseTitle: "A Vitaliza é uma empresa especializada em Higienização de Caixas para o setor alimentício",
    expertiseDescription:
      "São mais de 13 anos atuando exclusivamente nesse segmento sempre agindo com as melhores práticas ambientais, com processos automatizados que garantem a qualidade que você e o seu cliente precisam ter.",
    capacityTitle: "Infraestrutura adequada para qualquer tamanho de processo",
    capacityDescription:
      "A Vitaliza tem capacidade para atender todos os tamanhos de demanda.",
    capacitySupport:
      "Se a sua empresa tem processos que envolvam pequenas, medias ou grandes quantidades, nossa equipe sempre atenderá suas necessidades de forma personalizada.",
  },
  {
    slug: "setor-automotivo-sistemista-industrial",
    title: "Setor automotivo, sistemista e industrial",
    badge: "Automotivo",
    description:
      "Empresas automotivas, sistemistas e industriais que utilizam caixas plásticas em seus processos precisam controlar a limpeza, higienização e principalmente a remoção de resíduos oleosos.",
    image: assetUrl("images/servicos/setor-automotivo.png"),
    color: "from-blue-500 to-indigo-600",
    lightColor: "bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-700",
    borderColor: "border-blue-200",
    intro: [
      "Empresas do setor Automotivo, Sistemista e Industrial que utilizam caixas plásticas em seus processos e que prezam pela qualidade de seus produtos transportados, devem se preocupar também com a limpeza, higienização e principalmente remoção de resíduos oleosos.",
      "Contratar uma empresa especializada para a realização do Serviço de Higienização de Caixas plásticas para o setor Automotivo pode trazer muitas vantagens e, além disso, economias consideráveis.",
    ],
    benefitsTitle: "Vantagens para o setor automotivo, sistemista e industrial",
    benefits: [
      "Economia de Água, Energia Elétrica e principalmente Espaço Interno.",
      "Contar com Mão de obra especializada.",
      "Isenção de documentações exigidas pela legislação e de Controle de Produtos Químicos.",
      "Garantia do Descarte e tratamento de resíduos de forma adequada.",
      "Custo zero de Manutenção de máquinas e equipamentos.",
      "Emissão de Laudos de Higienização e Comprovantes de Sanitização.",
    ],
    expertiseTitle: "A Vitaliza é uma empresa especializada em Higienização de Caixas para o setor Automotivo, Sistemista e Industrial",
    expertiseDescription:
      "São mais de 13 anos atuando exclusivamente nesse segmento sempre agindo com as melhores práticas ambientais, com processos automatizados que garantem a qualidade que você e o seu cliente precisam ter.",
    capacityTitle: "Infraestrutura adequada para qualquer tamanho de processo",
    capacityDescription:
      "A Vitaliza tem capacidade para atender todos os tamanhos de demanda.",
    capacitySupport:
      "Se a sua empresa tem processos que envolvam pequenas, medias ou grandes quantidades, nossa equipe sempre atenderá suas necessidades de forma personalizada.",
  },
  {
    slug: "setor-hospital-farmaceutico",
    title: "Setor hospitalar e farmacêutico",
    badge: "Hospitalar e Farmacêutico",
    description:
      "Empresas do setor hospitalar e farmacêutico que utilizam caixas ou estrados plásticos em seus processos precisam assegurar limpeza, higienização e sanitização com alto nível de controle.",
    image: assetUrl("images/servicos/setor-hospital-farmaceutico.jpg"),
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50",
    badgeColor: "bg-violet-100 text-violet-700",
    borderColor: "border-violet-200",
    intro: [
      "Empresas do setor Hospitalar e Farmacêutico que utilizam caixas ou estrados plásticos em seus processos e que prezam pela qualidade de seus produtos transportados, devem se preocupar também com a limpeza, higienização e sanitização de suas caixas plásticas.",
      "Contratar uma empresa especializada para a realização do Serviço de Higienização de Caixas para o setor da Saúde pode trazer muitas vantagens e, além disso, economias consideráveis.",
    ],
    benefitsTitle: "Vantagens para o setor hospitalar e farmacêutico",
    benefits: [
      "Economia de Água, Energia Elétrica e principalmente Espaço Interno.",
      "Contar com Mão de obra especializada.",
      "Isenção de documentações exigidas pela legislação e de Controle de Produtos Químicos.",
      "Garantia do Descarte e tratamento de resíduos de forma adequada.",
      "Custo zero de Manutenção de máquinas e equipamentos.",
      "Emissão de Laudos de Higienização e Comprovantes de Sanitização.",
    ],
    expertiseTitle: "A Vitaliza é uma empresa especializada em Higienização de Caixas para o setor Hospitalar e Farmacêutico",
    expertiseDescription:
      "São mais de 13 anos atuando exclusivamente nesse segmento sempre agindo com as melhores práticas ambientais, com processos automatizados que garantem a qualidade que você e o seu cliente precisam ter.",
    capacityTitle: "Infraestrutura adequada para qualquer tamanho de processo",
    capacityDescription:
      "A Vitaliza tem capacidade para atender todos os tamanhos de demanda.",
    capacitySupport:
      "Se a sua empresa tem processos que envolvam pequenas, medias ou grandes quantidades, nossa equipe sempre atenderá suas necessidades de forma personalizada.",
  },
];

export const SERVICE_PAGES_BY_SLUG = Object.fromEntries(
  SERVICE_PAGES.map((service) => [service.slug, service]),
) as Record<string, ServicePage>;
