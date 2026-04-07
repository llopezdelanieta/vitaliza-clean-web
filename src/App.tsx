import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NossaHistoriaInstitutionalV2 from "./pages/NossaHistoriaInstitutionalV2";
import ServiceSectorPageV2 from "./pages/ServiceSectorPageV2";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossa-historia" element={<NossaHistoriaInstitutionalV2 />} />
        <Route path="/servicos/:slug" element={<ServiceSectorPageV2 />} />
      </Routes>
    </HashRouter>
  );
}
