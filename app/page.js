import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies';
import SolutionsSection from './components/SolutionsSection/SolutionsSection';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustedCompanies />
      <SolutionsSection />
      <Footer />
    </div>
  );
}
