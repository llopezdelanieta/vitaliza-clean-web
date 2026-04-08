import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NossaHistoria from "./pages/NossaHistoria";
import ServicosPrestados from "./pages/ServicosPrestados";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossa-historia" element={<NossaHistoria />} />
        <Route path="/servicos/:slug" element={<ServicosPrestados />} />
      </Routes>
    </HashRouter>
  );
}
