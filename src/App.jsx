import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import ScrollToTop from './components/ui/ScrollToTop/ScrollToTop'

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FreightPage from './pages/FreightPage';
import BPOPage from './pages/BPOPage';
import CustomsPage from './pages/CustomsPage';
import SpecializedPage from './pages/SpecializedPage';
import CareersPage from './pages/CareersPage';
import BDPPage from './pages/BDPPage';
import ContactPage from './pages/ContactPage';
import PrimePage from './pages/PrimePage';
import NewsPage from './pages/NewsPage';
import ArticlePage from './pages/ArticlePage';
import TradeConsultationPage from './pages/TradeConsultationPage';
import SupplyChainCommunityPage from './pages/SupplyChainCommunityPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services"  element={<ServicesPage />} />
        <Route path="/services/freight-forwarding"  element={<FreightPage />} />
        <Route path="/services/logistics-bpo" element={<BPOPage />} />
        <Route path="/services/customs-consultancy" element={<CustomsPage />} />
        <Route path="/services/specialized-logistics" element={<SpecializedPage />} />
        <Route path="/bdp-partnership" element={<BDPPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/prime-business-solutions" element={<PrimePage />} />
        <Route path="/news/:slug" element={<ArticlePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/services/trade-consultation" element={<TradeConsultationPage />} />
        <Route path="/supply-chain-community" element={<SupplyChainCommunityPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App