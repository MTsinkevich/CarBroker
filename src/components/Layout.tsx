import { Car, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [showBrandMenu, setShowBrandMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/80 to-blue-50">
      {/* Costco Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-800 text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm font-light">
            Costco Members: Get Additional $2000 On Your New Volvo Vehicle Lease
          </p>
        </div>
      </div>
      
      {/* Floating Navigation */}
      <nav className="fixed top-10 left-0 right-0 z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="backdrop-blur-md bg-white/90 rounded-full py-3 px-4 sm:px-6 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <Link to="/">
                <Car className={`h-6 w-6 sm:h-8 sm:w-8 ${isHome ? 'text-slate-800' : 'text-slate-800'}`} />
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <div className="relative">
                  <button 
                    onClick={() => setShowBrandMenu(!showBrandMenu)}
                    className="text-slate-800 hover:opacity-80 transition-colors text-sm flex items-center gap-1"
                  >
                    Brands <ChevronDown className="h-4 w-4" />
                  </button>
                  {showBrandMenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <Link
                          to="/volvo"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                          onClick={() => setShowBrandMenu(false)}
                        >
                          Volvo
                        </Link>
                        <Link
                          to="/volkswagen"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                          onClick={() => setShowBrandMenu(false)}
                        >
                          Volkswagen
                        </Link>
                        <Link
                          to="/mitsubishi"
                          className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                          onClick={() => setShowBrandMenu(false)}
                        >
                          Mitsubishi
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link 
                  to="/about" 
                  className="text-slate-800 hover:opacity-80 transition-colors text-sm"
                >
                  About
                </Link>
                <Link 
                  to="/testimonials" 
                  className="text-slate-800 hover:opacity-80 transition-colors text-sm"
                >
                  Testimonials
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div className={`w-6 h-0.5 bg-current mb-1 transition-all ${showMobileMenu ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current mb-1 ${showMobileMenu ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current ${showMobileMenu ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>

            {/* Contact Button (Desktop) */}
            <button 
              onClick={() => navigate('/consultation')}
              className="hidden md:block px-6 py-2 rounded-full hover:opacity-90 transition-colors bg-slate-800 text-white text-sm"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-2 backdrop-blur-md bg-white/90 rounded-lg p-4 shadow-lg">
              <div className="space-y-4">
                <div>
                  <button 
                    onClick={() => setShowBrandMenu(!showBrandMenu)}
                    className="w-full text-left text-slate-800 py-2 text-sm flex items-center justify-between"
                  >
                    Brands <ChevronDown className={`h-4 w-4 transition-transform ${showBrandMenu ? 'rotate-180' : ''}`} />
                  </button>
                  {showBrandMenu && (
                    <div className="pl-4 space-y-2 mt-2">
                      <Link
                        to="/volvo"
                        className="block py-2 text-sm text-slate-700"
                        onClick={() => {
                          setShowBrandMenu(false);
                          setShowMobileMenu(false);
                        }}
                      >
                        Volvo
                      </Link>
                      <Link
                        to="/volkswagen"
                        className="block py-2 text-sm text-slate-700"
                        onClick={() => {
                          setShowBrandMenu(false);
                          setShowMobileMenu(false);
                        }}
                      >
                        Volkswagen
                      </Link>
                      <Link
                        to="/mitsubishi"
                        className="block py-2 text-sm text-slate-700"
                        onClick={() => {
                          setShowBrandMenu(false);
                          setShowMobileMenu(false);
                        }}
                      >
                        Mitsubishi
                      </Link>
                    </div>
                  )}
                </div>
                <Link 
                  to="/about" 
                  className="block text-slate-800 py-2 text-sm"
                  onClick={() => setShowMobileMenu(false)}
                >
                  About
                </Link>
                <Link 
                  to="/testimonials" 
                  className="block text-slate-800 py-2 text-sm"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Testimonials
                </Link>
                <button 
                  onClick={() => {
                    navigate('/consultation');
                    setShowMobileMenu(false);
                  }}
                  className="w-full bg-slate-800 text-white py-2 rounded-full text-sm"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            *Lease offers available through participating financial services. 
            All lease terms require approved credit. 
            Terms and conditions apply. Offers end December 31, 2023.
          </p>
        </div>
      </footer>
    </div>
  );
}