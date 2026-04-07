import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

const STORY_BLOCKS = [
  "Somos a VITALIZA CLEAN, especializada em lavagem e higienização de caixas plásticas, onde finalmente os segmentos alimentício, automotivo, farmacêutico, entre outros, podem contar com uma empresa especializada em lavagem, higienização e revitalização de caixas plásticas e outros produtos plásticos.",
  "Até o início de 2013, produtores, distribuidores de alimentos e hortifruti, supermercados, montadoras e sistemistas da cidade de São Paulo não tinham nenhuma opção para a solução de um problema que atingia a todos do segmento: a higienização e a revitalização de suas caixas plásticas.",
  "Percebendo a carência deste serviço no mercado, Roberto Rodrigues Junior, que atua como empresário no segmento plástico há mais de 30 anos, iniciou em janeiro de 2013 as atividades da VITALIZA CLEAN.",
];

const DIFFERENTIALS = [
  "Capacidade para higienizar centenas de caixas por hora.",
  "Equipamentos de alta potência para um processo completo.",
  "Mão de obra especializada para lavagem, higienização e revitalização.",
  "Agilidade operacional para devolver as caixas limpas em curto espaço de tempo.",
];

export default function NossaHistoriaInstitutional() {
  return (
    <div className="font-['Inter',sans-serif] min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="pt-24 md:pt-32">
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <img
              src="/images/nossa-historia/fachada-com-carga.jpg"
              alt="Fachada da Vitaliza Clean com caminhão carregado"
              className="h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,47,73,0.92),rgba(14,116,144,0.78),rgba(37,99,235,0.72))]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="max-w-4xl">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-cyan-200 backdrop-blur-sm">
                Conheça a nossa empresa
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                A história da <span className="text-cyan-300">VITALIZA CLEAN</span> nasceu para resolver uma necessidade real do mercado
              </h1>
              <p className="mt-6 max-w-3xl text-justify text-lg leading-relaxed text-slate-100 md:text-xl">
                Desde janeiro de 2013, atuamos com foco em lavagem, higienização e revitalização de caixas plásticas e outros produtos plásticos para segmentos que exigem produtividade, cuidado e confiança operacional.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-3xl font-black text-white">2013</div>
                  <div className="mt-1 text-sm text-cyan-100">Início das atividades da empresa</div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-3xl font-black text-white">30+ anos</div>
                  <div className="mt-1 text-sm text-cyan-100">de experiência de mercado no segmento plástico</div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-3xl font-black text-white">Centenas</div>
                  <div className="mt-1 text-sm text-cyan-100">de caixas higienizadas por hora</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-1.5 text-sm font-semibold text-cyan-700">
                Conheça a nossa empresa
              </span>
              <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
                Especialização que trouxe uma nova solução para São Paulo
              </h2>

              <div className="mt-8 space-y-6 text-justify text-lg leading-relaxed text-slate-600">
                {STORY_BLOCKS.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-200/70">
                <img
                  src="/images/nossa-historia/fachada.jpg"
                  alt="Fachada da empresa Vitaliza Clean"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-200/50">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    Origem
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-200">
                    A empresa surgiu para suprir a carência de um serviço altamente específico e essencial para cadeias logísticas exigentes.
                  </p>
                </div>
                <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6 shadow-xl shadow-emerald-100/60">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
                    Atuação
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    Alimentício, automotivo, farmacêutico e outros setores que dependem de higienização com regularidade e padrão.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <blockquote className="rounded-[2rem] border border-cyan-100 bg-gradient-to-r from-cyan-50 via-white to-blue-50 px-8 py-10 shadow-lg shadow-cyan-100/60 md:px-12">
              <p className="text-justify text-xl font-semibold leading-relaxed text-slate-900 md:text-2xl">
                “Criamos a VITALIZA CLEAN para poder suprir de forma adequada essa necessidade. Finalmente o mercado pode contar com uma empresa especializada na lavagem e higienização de caixas plásticas.”
              </p>
              <footer className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-cyan-700">
                Roberto Rodrigues Junior
              </footer>
            </blockquote>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">              
              <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4x1">
                Estrutura, equipe e processo para atender com velocidade e qualidade
              </h2>
              <p className="mt-6 text-justify text-lg leading-relaxed text-slate-600">
                A VITALIZA CLEAN tem capacidade para higienizar centenas de caixas por hora, o que agiliza o processo e permite que os clientes tenham suas caixas limpas e revitalizadas em curto espaço de tempo. Esse procedimento exige produtos adequados, mão de obra especializada e equipamentos de alta potência para que o processo seja completo.
              </p>
              <p className="mt-4 text-justify text-lg leading-relaxed text-slate-600">
                Se a sua empresa necessita de serviços de higienização e revitalização em produtos plásticos, a conclusão é simples: a VITALIZA CLEAN é a melhor solução para atender essa necessidade.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
                <img
                  src="/images/nossa-historia/equipe.jpg"
                  alt="Equipe da Vitaliza Clean em área operacional"
                  className="h-full max-h-[560px] w-full bg-white object-contain"
                />
              </div>

              <div className="grid gap-6 content-start">
                <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/70">
                  <h3 className="text-2xl font-bold text-slate-900">Diferenciais operacionais</h3>
                  <div className="mt-6 grid gap-4">
                    {DIFFERENTIALS.map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                        <div className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-600 p-8 text-white shadow-2xl shadow-cyan-200/70">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                    Missão
                  </div>
                  <p className="mt-4 text-justify text-xl font-semibold leading-relaxed">
                    Desenvolver e realizar serviços inovadores e inteligentes para atender e superar as expectativas de nossos clientes, contribuindo para nossas metas econômicas, sociais e ambientais.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to="/#contato"
                      className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-semibold text-slate-900 transition-transform hover:scale-[1.02]"
                    >
                      Solicitar orçamento
                    </Link>
                    <Link
                      to="/servicos/setor-alimenticio"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      Ver nossos serviços
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-700">
                  Estrutura da empresa
                </span>
                <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
                  Uma operação preparada para atender diferentes demandas logísticas
                </h2>
              </div>
              <p className="max-w-2xl text-justify text-lg leading-relaxed text-slate-600">
                Nossa estrutura foi construída para oferecer confiabilidade operacional, atendimento ágil e higienização completa para caixas plásticas e outros produtos retornáveis.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-200/70">
              <img
                src="/images/nossa-historia/fachada-com-carga.jpg"
                alt="Fachada da Vitaliza Clean com carga pronta para operação logística"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-12 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <img src="/images/logotipo_100x100.png" alt="Vitaliza Clean" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-semibold text-white">VITALIZA CLEAN</div>
                <div className="text-sm text-slate-500">Lavagem, higienização e revitalização de caixas plásticas</div>
              </div>
            </div>
            <div className="text-center text-sm md:text-right">
              © {new Date().getFullYear()} Vitaliza Clean. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
