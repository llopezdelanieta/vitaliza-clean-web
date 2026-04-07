import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NossaHistoriaInstitutional from "./pages/NossaHistoriaInstitutional";
import ServiceSectorPageV2 from "./pages/ServiceSectorPageV2";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nossa-historia" element={<NossaHistoriaInstitutional />} />
        <Route path="/servicos/:slug" element={<ServiceSectorPageV2 />} />
      </Routes>
    </HashRouter>
  );
}
