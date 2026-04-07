import { assetUrl } from "../lib/assets";

export type Client = {
  name: string;
  logo: string;
  segment: "Alimentício" | "Automotivo" | "Sistemista" | "Industrial" | "Hospitalar" | "Farmacêutico";
};

export const CLIENTS: Client[] = [
  { name: "Rio Acima", logo: assetUrl("images/clientes/logo_rioacima.png"), segment: "Alimentício" },
  { name: "Kentisa", logo: assetUrl("images/clientes/logo_kentisa.png"), segment: "Alimentício" },
  { name: "Morita", logo: assetUrl("images/clientes/morita-300x288.png"), segment: "Alimentício" },
  { name: "Elo Fruti", logo: assetUrl("images/clientes/logo_elo.png"), segment: "Alimentício" },
  { name: "Agro Bonfim", logo: assetUrl("images/clientes/logo_agrobonfim.png"), segment: "Alimentício" },
  { name: "Els Bananas", logo: assetUrl("images/clientes/elsbananas-300x234.jpg"), segment: "Alimentício" },
  { name: "MJ Maciel", logo: assetUrl("images/clientes/maciel.jpg"), segment: "Alimentício" },
  { name: "Campo Alto", logo: assetUrl("images/clientes/campoalto-300x136.png"), segment: "Alimentício" },
  { name: "Hortigil Hortifruti", logo: assetUrl("images/clientes/hortigil-hortifruti-vitalizaplast.jpg"), segment: "Alimentício" },
  { name: "Natural da Terra", logo: assetUrl("images/clientes/natural-da-terra-vitalizaplast.jpg"), segment: "Alimentício" },
  { name: "Naturalis", logo: assetUrl("images/clientes/naturalis-vitalizaplast.jpg"), segment: "Alimentício" },
  { name: "Domino's Pizza", logo: assetUrl("images/clientes/dominos-1.png"), segment: "Alimentício" },
  { name: "Oba Hortifruti", logo: assetUrl("images/clientes/Oba-300x300.png"), segment: "Alimentício" },
  { name: "Oggi Sorvetes", logo: assetUrl("images/clientes/df82d0ea71135843c3a33bd5e1d7c881-300x184.png"), segment: "Alimentício" },
  { name: "Estampo Tec", logo: assetUrl("images/clientes/ESTAMPO-TEC-300x68.png"), segment: "Automotivo" },
  { name: "Acrilex", logo: assetUrl("images/clientes/logo-acrilex-300x120.png"), segment: "Industrial" },
  { name: "Paranoá", logo: assetUrl("images/clientes/LOGO-PARANOA.png"), segment: "Industrial" },
  { name: "Isringhausen", logo: assetUrl("images/clientes/ISRINGHAUSEN-300x300.jpg"), segment: "Sistemista" },
  { name: "Mitsubishi Electric", logo: assetUrl("images/clientes/melco-mitsubishi-eletric-vitalizaplast.jpg"), segment: "Automotivo" },
  { name: "Haldex", logo: assetUrl("images/clientes/Haldex-Vitalizaplast.jpg"), segment: "Sistemista" },
  { name: "Freudenberg", logo: assetUrl("images/clientes/freudenberg-vitalizaplast.jpg"), segment: "Sistemista" },
  { name: "Zanettini", logo: assetUrl("images/clientes/zanettini-vitalizaplast.jpg"), segment: "Sistemista" },
  { name: "Max Del", logo: assetUrl("images/clientes/maxdel-vitalizaplast.jpg"), segment: "Sistemista" },
  { name: "Associated Springs", logo: assetUrl("images/clientes/Associated-Springs-vitalizaplast.jpg"), segment: "Sistemista" },
  { name: "Schaeffler", logo: assetUrl("images/clientes/Schaeffler-vitalizaplast.jpg"), segment: "Automotivo" },
  { name: "Cummins", logo: assetUrl("images/clientes/cummins-vitalizaplast.jpg"), segment: "Sistemista" },
  { name: "Aisin", logo: assetUrl("images/clientes/aisin-vitalizaplast.jpg"), segment: "Automotivo" },
  { name: "Sanko Espumas", logo: assetUrl("images/clientes/sanko-espumas-vitalizaplast.jpg"), segment: "Sistemista" },
  { name: "Brassinter", logo: assetUrl("images/clientes/brassinter-vitalizaplast.jpg"), segment: "Industrial" },
  { name: "Norgren", logo: assetUrl("images/clientes/norgren-vitalizaplast.jpg"), segment: "Sistemista" },
  { name: "Lopsa", logo: assetUrl("images/clientes/lopsa-300x172.jpg"), segment: "Industrial" },
  { name: "Minebea AccessSolutions", logo: assetUrl("images/clientes/Minebea-300x87.png"), segment: "Sistemista" },
  { name: "Marelli", logo: assetUrl("images/clientes/logo-marelli-300x215.png"), segment: "Automotivo" },
  { name: "Scania", logo: assetUrl("images/clientes/logo-SCANIA.png"), segment: "Automotivo" },
  { name: "Johnson & Johnson", logo: assetUrl("images/clientes/logotipo-Johnson-Johnson-historia-300x167.jpg"), segment: "Farmacêutico" },
  { name: "Hosplog", logo: assetUrl("images/clientes/hosplog-240x300.png"), segment: "Hospitalar" },
  { name: "Hospital das Clínicas", logo: assetUrl("images/clientes/hospital-das-clinicas-vitalizaplast.jpg"), segment: "Hospitalar" },
  { name: "Colgate-Palmolive", logo: assetUrl("images/clientes/Colgate-Palmolive.png"), segment: "Farmacêutico" },
];
