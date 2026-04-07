import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import { SERVICE_PAGES_BY_SLUG } from "../data/servicePagesBase";
import { assetUrl } from "../lib/assets";

export default function ServiceSectorPageV2() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  if (!slug) {
    return <Navigate to="/" replace />;
  }

  const service = SERVICE_PAGES_BY_SLUG[slug];

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="font-['Inter',sans-serif] bg-white text-gray-900 min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 pt-24 md:pt-32">
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <img src={service.image} alt={service.title} className="h-full w-full object-cover opacity-25" />
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80`} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold ${service.badgeColor} bg-white/90`}>
              {service.badge}
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
              Soluções para o {service.title.toLowerCase()}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to={{ pathname: "/", hash: "#contato" }}
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-900 transition-transform hover:scale-[1.02]"
              >
                Solicitar orçamento
              </Link>
              <Link
                to="/nossa-historia"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Conhecer a empresa
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div className={`rounded-3xl border ${service.borderColor} ${service.lightColor} p-8 md:p-10`}>
              <h2 className="text-3xl font-bold text-gray-900">Como atendemos esse segmento</h2>
              <div className="mt-6 space-y-5">
                {service.intro.map((paragraph) => (
                  <p key={paragraph} className="text-justify text-lg leading-relaxed text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">{service.expertiseTitle}</h3>
                <p className="mt-4 text-justify text-lg leading-relaxed text-gray-600">
                  {service.expertiseDescription}
                </p>
              </div>

              <div className="mt-8 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">{service.capacityTitle}</h3>
                <p className="mt-4 text-justify text-lg leading-relaxed text-gray-600">
                  {service.capacityDescription}
                </p>
                <p className="mt-3 text-justify text-lg leading-relaxed text-gray-600">
                  {service.capacitySupport}
                </p>
              </div>
            </div>

            <aside className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-xl shadow-gray-100/70">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
              </div>

              <h2 className="mt-8 text-2xl font-bold text-gray-900">{service.benefitsTitle}</h2>
              <div className="mt-6 space-y-3">
                {service.benefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-700">
                    <div className={`mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-br ${service.color} flex-shrink-0`} />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>

              <Link
                to={{ pathname: "/", hash: "#contato" }}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} px-6 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-[1.02]`}
              >
                Falar com a Vitaliza
              </Link>
            </aside>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={assetUrl("images/logotipo_100x100.png")} alt="Vitaliza Plast" className="h-12" />
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/" className="hover:text-cyan-400 transition-colors">
                Início
              </Link>
              <Link to="/nossa-historia" className="hover:text-cyan-400 transition-colors">
                Nossa História
              </Link>
            </div>
            <div className="text-sm text-center">
              © {new Date().getFullYear()} Vitaliza Clean. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
