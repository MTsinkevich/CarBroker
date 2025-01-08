import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Consultation from './pages/Consultation';
import XC60Detail from './pages/XC60Detail';
import XC40Detail from './pages/XC40Detail';
import S60Detail from './pages/S60Detail';
import XC90Detail from './pages/XC90Detail';
import Volvo from './pages/Volvo';
import Volkswagen from './pages/Volkswagen';
import Mitsubishi from './pages/Mitsubishi';
import AtlasDetail from './pages/AtlasDetail';
import AtlasSportDetail from './pages/AtlasSportDetail';
import TiguanDetail from './pages/TiguanDetail';
import JettaDetail from './pages/JettaDetail';
import OutlanderDetail from './pages/OutlanderDetail';
import EclipseCrossDetail from './pages/EclipseCrossDetail';
import OutlanderSportDetail from './pages/OutlanderSportDetail';
import Testimonials from './pages/Testimonials';

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/xc60" element={<XC60Detail />} />
        <Route path="/xc40" element={<XC40Detail />} />
        <Route path="/s60" element={<S60Detail />} />
        <Route path="/xc90" element={<XC90Detail />} />
        <Route path="/volvo" element={<Volvo />} />
        <Route path="/volkswagen" element={<Volkswagen />} />
        <Route path="/mitsubishi" element={<Mitsubishi />} />
        <Route path="/vw-atlas" element={<AtlasDetail />} />
        <Route path="/vw-atlas-sport" element={<AtlasSportDetail />} />
        <Route path="/vw-tiguan" element={<TiguanDetail />} />
        <Route path="/vw-jetta" element={<JettaDetail />} />
        <Route path="/mitsubishi-outlander" element={<OutlanderDetail />} />
        <Route path="/mitsubishi-eclipse-cross" element={<EclipseCrossDetail />} />
        <Route path="/mitsubishi-outlander-sport" element={<OutlanderSportDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Layout>
  );
}