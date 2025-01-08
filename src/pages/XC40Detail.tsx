import { Shield, Battery, Wifi, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function XC40Detail() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety First",
      description: "Advanced driver assistance with City Safety"
    },
    {
      icon: <Battery className="w-6 h-6" />,
      title: "Electrified",
      description: "Available as pure electric or mild hybrid"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Connected",
      description: "Google built-in with wireless charging"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "City-Smart",
      description: "Compact design perfect for urban living"
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <img 
          src="https://www.kbb.com/wp-content/uploads/2023/02/2023-volvo-xc40-front-34-1200x675-1.jpg"
          alt="Volvo XC40"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-light mb-4">Volvo XC40</h1>
            <p className="text-xl mb-8">Urban Luxury Redefined</p>
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
                <span className="text-5xl font-light">$435</span>
                <span className="text-slate-600">/month*</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-light">$0</p>
                  <p className="text-slate-600">Down Payment</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-light">36</p>
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
              src="https://flib.carshow360.net/500/600/5276173fb6673f22d46.webp" 
              alt="XC40 Side View"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <img 
              src="https://www.motortrend.com/uploads/sites/5/2018/02/New-Volvo-XC40-Inscription-interior6.jpg?w=768&width=768&q=75&format=webp" 
              alt="XC40 Interior"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <img 
              src="https://ik.imagekit.io/girnar/sayaratbay/large/gallery/exterior/42/1816/volvo-xc40recharge-rear-angle-view-543368.jpg" 
              alt="XC40 Rear Quarter"
              className="rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-8">Ready to Experience the XC40?</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
            Let our concierge team help you configure your perfect XC40 and secure the best possible lease terms.
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