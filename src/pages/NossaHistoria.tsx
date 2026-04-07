import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NossaHistoria() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-['Inter',sans-serif] bg-white text-gray-900 min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-100/50" : "bg-white/95 backdrop-blur-md border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img src="/images/logotipo_100x100.png" alt="Vitaliza Plast" className="h-12" />
            </Link>
            
            <nav className="flex items-center">
              <Link
                to="/"
                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-300/40 hover:shadow-blue-400/50 hover:scale-105 transition-all duration-200"
              >
                Voltar ao Início
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 text-sm font-semibold rounded-full mb-4">
              Nossa História
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
              A Trajetória da{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Vitaliza Clean
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              De um pequeno galpão a uma referência nacional em higienização industrial, conheça os passos que nos trouxeram até aqui.
            </p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-white text-xs font-bold">2010</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-100/50 group-hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-gray-900 text-xl mb-2">O Início</h3>
                <p className="text-gray-600">
                  Fundada com o objetivo de oferecer soluções em higienização para pequenas empresas locais, a Vitaliza Clean começou suas operações focada no setor alimentício.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-cyan-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-white text-xs font-bold">2015</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-100/50 group-hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-gray-900 text-xl mb-2">Expansão de Mercado</h3>
                <p className="text-gray-600">
                  Com o aumento da demanda e o reconhecimento pela excelência, expandimos nosso atendimento para o setor automotivo e de autopeças.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-white text-xs font-bold">2019</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-100/50 group-hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-gray-900 text-xl mb-2">Novo Complexo Industrial</h3>
                <p className="text-gray-600">
                  Inauguração da nossa nova planta de 4.000m² em Diadema, equipada com maquinários de alta tecnologia para higienização de ponta a ponta.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-cyan-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="text-white text-xs font-bold">Hoje</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-100/50 group-hover:-translate-y-1 transition-transform">
                <h3 className="font-bold text-gray-900 text-xl mb-2">Referência Nacional</h3>
                <p className="text-gray-600">
                  Hoje, atendemos grandes marcas multinacionais do setor farmacêutico, alimentício e automotivo, com certificações que atestam nossa qualidade impecável.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src="/images/logotipo_100x100.png" alt="Vitaliza Plast" className="h-12 opacity-80" />
          </div>
          <div>
            © {new Date().getFullYear()} Vitaliza Clean. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
