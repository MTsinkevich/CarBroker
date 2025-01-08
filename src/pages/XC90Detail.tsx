import { Shield, Battery, Wifi, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function XC90Detail() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Excellence",
      description: "Advanced driver assistance with enhanced Pilot Assist"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Hybrid Power",
      description: "Powerful T8 eAWD plug-in hybrid powertrain"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connected",
      description: "Google built-in with 5G connectivity"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Versatile",
      description: "Luxurious seating for up to 7 passengers"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <img 
          src="https://media.ed.edmunds-media.com/volvo/xc90/2025/oem/2025_volvo_xc90_4dr-suv_t8-plus_fq_oem_1_1600.jpg"
          alt="Volvo XC90"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-light mb-4">Volvo XC90</h1>
            <p className="text-xl mb-8">The Ultimate Luxury SUV Experience</p>
            <button 
              onClick={() => navigate('/consultation')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Lease Offer */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-center mb-8">Special Lease Offer</h2>
            <div className="bg-slate-50 rounded-xl p-8">
              <div className="text-center mb-6">
                <span className="text-5xl font-light">$559</span>
                <span className="text-slate-600">/month*</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-light">$0</p>
                  <p className="text-slate-600">Down Payment</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light">24</p>
                  <p className="text-slate-600">Month Lease</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light">7,500</p>
                  <p className="text-slate-600">Miles/Year</p>
                </div>
              </div>
              <div className="text-center">
                <button 
                  onClick={() => navigate('/consultation')}
                  className="bg-slate-800 text-white px-8 py-3 rounded-full hover:bg-slate-700 transition-colors mb-8"
                >
                  Claim This Offer
                </button>
                <p className="text-[10px] text-slate-600 leading-relaxed max-w-5xl mx-auto">
                  *Excludes: first month, acquisition fee, new/transfer plates and local tax
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-slate-100/80 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-block p-4 bg-white rounded-full shadow-sm mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-light mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center mb-16">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <img 
              src="https://media.ed.edmunds-media.com/volvo/xc90/2024/oem/2024_volvo_xc90_4dr-suv_recharge-t8-ultimate_s_oem_1_1280.jpg" 
              alt="XC90 Side View"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <img 
              src="https://www.volvocars.com/images/cs/v3/assets/blt0feaa88e629251fc/blta3f74e33649d7b39/66981953792d78545c315835/xc90-fuel-flatcard-2-4x3.jpg?branch=prod_alias&auto=webp&h=1440&iar=0&w=1920" 
              alt="XC90 Interior"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <img 
              src="https://media.ed.edmunds-media.com/volvo/xc90/2024/oem/2024_volvo_xc90_4dr-suv_recharge-t8-ultimate_rq_oem_1_1280.jpg" 
              alt="XC90 Rear Quarter"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-8">Ready to Experience the XC90?</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Let our concierge team help you configure your perfect XC90 and secure the best possible lease terms.
          </p>
          <button 
            onClick={() => navigate('/consultation')}
            className="bg-white text-slate-800 px-8 py-3 rounded-full hover:bg-slate-100 transition-colors"
          >
            Schedule Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}